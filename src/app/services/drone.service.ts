import { Injectable } from '@angular/core';
import { Storage as IonicStorage } from '@ionic/storage-angular';
import { Drone } from '../classes/drone';
import axios from 'axios';
import { Queries } from '../api/queries';
import { Configure } from '../api/configure';
import { TokenService } from './token.service';

//add
import { Storage } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class DroneService {
  public drones: Drone[] = [];
  private query: Queries = new Queries();
  private _storage: IonicStorage | null = null;

  constructor(
    private tokenService: TokenService,
    private ionicStorage: IonicStorage
  ) {
    this.init();
  }

  async init() {
    const storage = await this.ionicStorage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage.set(key, value);
  }

  async getDronesStorage(): Promise<Drone[]>{
    let value = await this._storage.get('drones');
    return value;
  }


  async setFlight(
    droneId: number,
    init_x: number,
    init_y: number,
    width: number,
    height: number,
    grape_height: number,
    interval: number,
    sight_range: number
  ) {
    //TODO: input other info from user
    this.query.insertOrUpdate_flight(
      droneId,
      init_x,
      init_y,
      width,
      height,
      grape_height,
      interval,
      sight_range
    );
    Configure.hasura['data'] = this.query.hasura;
    const response = await axios(Configure.hasura);
    console.log(response.data);
  }

  async insertDrone(product_name: string, zone: number, product_img: string) {
    const result = await this.tokenService.getToken();
    console.log(result);
    if (result) {
      let user_id = result;
      this.query.insert_drone(product_name, zone, product_img, user_id);
      Configure.hasura['data'] = this.query.hasura;
      console.log(Configure.hasura);
      let response = await axios(Configure.hasura);
      console.log(response.data);
    }
  }

  async updateTime(droneId: number, time: string) {
    this.query.update_time(droneId.toString(), time);
    Configure.hasura['data'] = this.query.hasura;
    const response = await axios(Configure.hasura);
    console.log(response.data);
  }

  async getDrones() {

    //console.log(user_id, this.query);
    var user_id = null;
    return new Promise((resolve, reject) => {
      this.tokenService.getToken().then((result) => {
        console.log(result);
        if (result) {
          this.query.select_drones(result);

          Configure.hasura['data'] = this.query.hasura;
          axios(Configure.hasura).then( (result) => {
            console.log(result);
            if (result) {
              this.drones = [];
              resolve(result.data.data.afarm_user[0].drones);
              Promise.all(result.data.data.afarm_user[0].drones.map(
                async (drone, index) => {
                  let tmp = new Drone(drone);
                  this.drones.push({
                    ...tmp,
                    start_time: tmp.start_time.split(".")[0],
                    // 인증된 URL반환
                    product_img: await Storage.get('drone/' + drone.product_img)
                  });

                  console.log(this.drones);
                }
              )).then(()=>{
                console.log(this.drones);
                this._storage.set('drones', this.drones)
              }
              );
            } else {
              reject('No drones found');
            }
          });


        }
      });

    });
  }
}

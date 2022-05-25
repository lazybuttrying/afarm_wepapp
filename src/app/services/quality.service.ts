import { Injectable } from '@angular/core';
import { Quality } from '../classes/quality';
import { Grape } from '../classes/grape';
import axios from 'axios';
import { Queries } from '../api/queries';
import { Configure } from '../api/configure';
import { TokenService } from './token.service';
//add
import { Storage } from 'aws-amplify';

interface QualityData {
  zone: number;
  data: Quality[];
}

@Injectable({
  providedIn: 'root',
})
export class QualityService {
  public quality: Quality[] = [];
  public grapes: Grape[] = [];
  public zones: Set<number> = new Set();
  public num = { grape: 0, berry: 0 };
  private query: Queries = new Queries();

  constructor(private tokenService: TokenService) {}

  async getQuality() {
    this.quality = [];
    var user_id = null;
    return new Promise((resolve, reject) => {
      this.tokenService.getToken().then((result) => {
        if (result) {
          this.query.get_quality(result);
          Configure.hasura['data'] = this.query.hasura;
          axios(Configure.hasura).then((result) => {
            if (result) {
              resolve(result.data.data.afarm_quality);
              result.data.data.afarm_quality.map(async (q, index) => {
                let tmp = new Quality(q.id, new Date(q.date), q.drone.zone);
                this.zones.add(tmp.zone);
                this.quality.push(tmp);
              });
            } else {
              reject('No quality found');
            }
          });
        }
      });
    });
  }

  async getGrapes(quaility_id: number): Promise<boolean> {
    this.grapes = [];
    this.num.grape = 0;
    this.num.berry = 0;
    this.query.get_grapes(quaility_id.toString());
    Configure.hasura['data'] = this.query.hasura;
    let result = await axios(Configure.hasura);
    console.log(result.data.data.afarm_grape.length);
    if (result.data.data.afarm_grape.length !== 0) {
      result.data.data.afarm_grape.map(async (grape, index) => {
        grape.img = await Storage.get('result/' + grape.img); // 인증된 URL반환
        let tmp = new Grape(grape);
        this.grapes.push(tmp);
        this.num.grape++;
        this.num.berry += grape.berry;
      });
      console.log(this.grapes);
      return true;
    } else {
      console.log('nothing');
      return false;
    }
  }
}

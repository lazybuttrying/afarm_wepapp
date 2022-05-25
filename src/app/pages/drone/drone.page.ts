import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drone } from 'src/app/classes/drone';
import { DroneService } from 'src/app/services/drone.service';

@Component({
  selector: 'app-drone',
  templateUrl: './drone.page.html',
  styleUrls: ['./drone.page.scss'],
})
export class DronePage implements OnInit {
  private selectTime: any = '';
  public drones: Drone[] = [];

  constructor(
    public droneService: DroneService,
    route:ActivatedRoute
    ) {
      route.params.subscribe(val => {
        this.init();
      });
    }

  ngOnInit() {
    // this.droneService.getDrones().then((result) => {
    //   console.log(result);
    // });
    //console.log(this.droneService.drones);
    // console.log('hhhh')
    this.init()
  }

  async init() {
    this.drones = await this.droneService.getDronesStorage();
    console.log(this.drones)

  }

  // async setFlight(droneId: number) {
  //   console.log(droneId);
  // }

  async updateTime(droneId: number) {
    console.log(droneId, this.selectTime);
    this.droneService.updateTime(droneId, this.selectTime);
  }
}

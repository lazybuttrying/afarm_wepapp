import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';
import { LoadingController } from '@ionic/angular';

import { Storage as S } from '@ionic/storage-angular';
import { DroneService } from 'src/app/services/drone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drone-upload',
  templateUrl: './drone-upload.page.html',
  styleUrls: ['./drone-upload.page.scss'],
})
export class DroneUploadPage implements OnInit {
  private _Img: File; // 추가
  private product_name: string;
  private zone: number;
  private imageTempUrl: string;

  constructor(
    private droneService: DroneService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  // 추가
  imgSelectHandler(event) {
    // 사용자가 선택한 이미지를 _Img 변수에 담음
    console.log(event);
    let reader = new FileReader();
    this._Img = event.target.files[0];
    reader.readAsDataURL(this._Img);
    reader.onload = () => {
      this.imageTempUrl = reader.result as string;
    };
  } // 추가

  async upload() {
    let loading = await this.loadingController.create({
      message: 'Uploading...',
    });
    await loading.present();
    try {
      let name = new Date() + this._Img.name; // for unique file name
      let newFile = new File([this._Img], name, { type: this._Img.type });
      this.uploadImg(newFile);

      await this.droneService.insertDrone(this.product_name, this.zone, name);
      // let tmp = await this.droneService.getDronesStorage();
      // tmp.push({
      //   id: 0,
      //   user_id: "",
      //   product_name: this.product_name,
      //   product_img : await Storage.get('drone/' + name),
      //   zone: this.zone,
      //   start_time: new Date().toISOString().split('.')[0]

      // })
    } finally {
      await this.droneService.getDrones();
      setTimeout(()=>{
        this.loadingController.dismiss();
        this.router.navigate(['/drone']);
      }, 3000);
    }
  }

  uploadImg(newFile: File) {
    console.log(this._Img);
    const result = Storage.put('drone/'+newFile.name, newFile, {
      progressCallback(progress) {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
      },
    });
  }
}

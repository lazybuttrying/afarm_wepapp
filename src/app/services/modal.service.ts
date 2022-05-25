import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GrapeImgModalPage } from '../pages/grape-img-modal/grape-img-modal.page';
@Injectable({ providedIn: 'root' })
export class ModalService {
  public img: string;

  constructor(private modalCtrl: ModalController) {}
  async presentModal(img: string) {
    this.img = img;
    const modal = await this.modalCtrl.create({ component: GrapeImgModalPage });
    return await modal.present();
  }
  async dismiss() {
    this.modalCtrl.dismiss({ dismissed: true });
  }
}

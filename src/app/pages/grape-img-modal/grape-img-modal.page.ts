import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-grape-img-modal',
  templateUrl: './grape-img-modal.page.html',
  styleUrls: ['./grape-img-modal.page.scss'],
})
export class GrapeImgModalPage implements OnInit {
  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private modalService: ModalService
  ) {}
  async dismiss() {
    this.modalCtrl.dismiss({ dismissed: true });
  }

  ngOnInit() {}
}

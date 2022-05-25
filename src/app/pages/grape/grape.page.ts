import { Component, OnInit } from '@angular/core';
import { QualityService } from 'src/app/services/quality.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-grape',
  templateUrl: './grape.page.html',
  styleUrls: ['./grape.page.scss'],
})
export class GrapePage implements OnInit {
  private quality_id: number;
  constructor(
    public qualityService: QualityService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.quality_id = history.state.qualityId;
    console.log(this.quality_id);
    (async () => {
      if (await this.qualityService.getGrapes(this.quality_id)) {
        console.log(this.qualityService.grapes);
      } else {
        var x = document.querySelector<HTMLElement>('.content');
        x.innerHTML = `<ion-label> 포도가 없습니다 </ion-label>`;
        x.style.display = 'flex';
        x.style.alignItems = 'center';
      }
    })();
  }
  imageEnLarge(img: string) {
    this.modalService.presentModal(img);
  }
}

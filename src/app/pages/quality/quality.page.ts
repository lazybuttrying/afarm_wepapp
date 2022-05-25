import { Component, OnInit } from '@angular/core';
import { QualityService } from 'src/app/services/quality.service';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.page.html',
  styleUrls: ['./quality.page.scss'],
})
export class QualityPage implements OnInit {
  constructor(public qualityService: QualityService) {}

  ngOnInit() {
    this.qualityService.getQuality();
  }

  test(quality_id: number) {
    this.qualityService.getGrapes(quality_id);
  }
}

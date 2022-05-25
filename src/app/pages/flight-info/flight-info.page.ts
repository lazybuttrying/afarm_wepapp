import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DroneService } from 'src/app/services/drone.service';


@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.page.html',
  styleUrls: ['./flight-info.page.scss'],
})

export class FlightInfoPage implements OnInit {
  private droneId: number;

  inputForm: any[] = [
    [
      {
        label: '초기 X좌표',
        placeholder: '초기 x좌표를 입력하세요.',
        value: null,
      },
      {
        label: '초기 y좌표',
        placeholder: '초기 y좌표를 입력하세요.',
        value: null,
      },
    ],
    [
      {
        label: '밭 가로 (km)',
        placeholder: '밭 가로 길이를 입력하세요.',
        value: null,
      },
      {
        label: '밭 세로 (km)',
        placeholder: '밭 세로 길이를 입력하세요.',
        value: null,
      },
    ], [
      {
        label: '포도 높이 (m)',
        placeholder: '포도의 높이를 입력하세요.',
        value: null,
      },
      {
        label: '재식 간격 (m)',
        placeholder: '재식 간격을 입력하세요.',
        value: null,
      },
    ], [
      {
        label: '드론 시야 (m)',
        placeholder: '드론 시야를 입력하세요.',
        value: null,
      },
      {
        label: '',
      }
    ]
  ];

  constructor(
    private history: Location,
    private droneService: DroneService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.droneId = history.state.droneId;
  }

  async register() {
    let droneId: number = 0;
    await this.droneService.setFlight(
      this.droneId,
      this.inputForm[0][0].value,
      this.inputForm[0][1].value,
      this.inputForm[1][0].value,
      this.inputForm[1][1].value,
      this.inputForm[2][0].value,
      this.inputForm[2][1].value,
      this.inputForm[3][0].value,
    );


  }

}

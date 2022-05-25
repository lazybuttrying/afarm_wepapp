import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Token } from 'src/app/classes/token';
import { User } from 'src/app/classes/user';
import { QualityService } from 'src/app/services/quality.service';
import { DroneService } from 'src/app/services/drone.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private user_id: string;
  private pw: string;
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private qualityService: QualityService,
    private droneService: DroneService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  async login() {
    let loading = await this.loadingController.create({
      message: 'Logging in...',
    });
    await loading.present();
    let user: User = null;
    user = await this.userService.getUser(this.user_id, this.pw);
    this.loadingController.dismiss();
    if (user) {
      await this.tokenService.setToken(user.user_id);
      alert('로그인성공');
      this.droneService.getDrones();
      this.qualityService.getQuality();
      this.router.navigate(['/home']);
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  }
}

import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Drone', url: 'drone', icon: 'airplane' },
    { title: 'ImgUpload', url: 'drone-upload', icon: 'airplane' },
    { title: 'Login', url: 'login', icon: 'person' },
    { title: 'Sign up', url: 'register', icon: 'person' },
    { title: 'Map', url: 'map', icon: 'map' },
    { title: 'FlightInfo', url: 'flight-info', icon: 'airplane' },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    });
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }
}

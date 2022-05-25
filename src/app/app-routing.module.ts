import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },

  {
    path: 'drone',
    loadChildren: () =>
      import('./pages/drone/drone.module').then((m) => m.DronePageModule),
  },
  {
    path: 'drone-upload',
    loadChildren: () =>
      import('./pages/drone-upload/drone-upload.module').then(
        (m) => m.DroneUploadPageModule
      ),
  },
  {
    path: 'map',
    loadChildren: () =>
      import('./pages/map/map.module').then((m) => m.MapPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'flight-info',
    loadChildren: () =>
      import('./pages/flight-info/flight-info.module').then(
        (m) => m.FlightInfoPageModule
      ),
  },
  {
    path: 'first-manual',
    loadChildren: () =>
      import('./pages/first-manual/first-manual.module').then(
        (m) => m.FirstManualPageModule
      ),
  },
  {
    path: 'quality',
    loadChildren: () =>
      import('./pages/quality/quality.module').then((m) => m.QualityPageModule),
  },
  {
    path: 'grape',
    loadChildren: () =>
      import('./pages/grape/grape.module').then((m) => m.GrapePageModule),
  },
  {
    path: 'quality-info',
    loadChildren: () =>
      import('./pages/quality-info/quality-info.module').then(
        (m) => m.QualityInfoPageModule
      ),
  },
  {
    path: 'grape-img-modal',
    loadChildren: () =>
      import('./pages/grape-img-modal/grape-img-modal.module').then(
        (m) => m.GrapeImgModalPageModule
      ),
  },
  {
    path: 'flight-manual',
    loadChildren: () => import('./pages/flight-manual/flight-manual.module').then(m => m.FlightManualPageModule)
  },
  {
    path: 'first-manual2',
    loadChildren: () => import('./pages/first-manual2/first-manual2.module').then(m => m.FirstManual2PageModule)
  },

  {
    path: 'first-manual2',
    loadChildren: () =>
      import('./pages/first-manual2/first-manual2.module').then(
        (m) => m.FirstManual2PageModule
      ),
  },
  {
    path: 'first-manual3',
    loadChildren: () =>
      import('./pages/first-manual3/first-manual3.module').then(
        (m) => m.FirstManual3PageModule
      ),
  },
  {
    path: 'first-manual4',
    loadChildren: () =>
      import('./pages/first-manual4/first-manual4.module').then(
        (m) => m.FirstManual4PageModule
      ),
  },
  {
    path: 'flight-manual2',
    loadChildren: () =>
      import('./pages/flight-manual2/flight-manual2.module').then(
        (m) => m.FlightManual2PageModule
      ),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

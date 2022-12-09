import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfilViewComponent } from './profil-view/profil-view.component';

export const appRouteList: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'profil',
    component: ProfilViewComponent
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouteList)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

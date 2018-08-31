import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from '../start-page/start-page.component'
import { LoginPageComponent } from '../login-page/login-page.component'
import { HomePageComponent } from '../home-page/home-page.component'

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/no-auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, data: { title: 'Cakeforu | login' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Cakeforu | Dashboard'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

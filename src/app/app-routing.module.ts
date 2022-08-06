import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/no-auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, data: { title: 'Cake4u | login' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

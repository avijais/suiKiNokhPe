import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpensesComponent } from './components/expenses/expenses/expenses.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { LoginComponent } from './components/no-auth/login/login.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserTypeComponent } from './components/user/user-type/user-type.component';

const routes: Routes = [
  { path: '', component: LoginComponent, data: { title: 'Cakeforu | login' } },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'MyNotes | Dashboard'} },
      { path: 'user', component: UserListComponent, data: { title: 'MyNotes | Users'} },
      { path: 'user/list', component: UserListComponent, data: { title: 'MyNotes | Users'} },
      { path: 'user/type', component: UserTypeComponent, data: { title: 'MyNotes | User Type' } },
      { path: 'expenses', component: ExpensesComponent, data: { title: 'MyNotes | Expenses' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

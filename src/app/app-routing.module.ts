import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpensesComponent } from './components/expenses/expenses/expenses.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { LoginComponent } from './components/no-auth/login/login.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserTypeComponent } from './components/user/user-type/user-type.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'MyNotes | login' } },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'MyNotes | Dashboard'} },
      { path: 'user', component: UserListComponent, data: { title: 'MyNotes | Users'} },
      { path: 'user/list', component: UserListComponent, data: { title: 'MyNotes | Users'} },
      { path: 'user/type', component: UserTypeComponent, data: { title: 'MyNotes | User Type' } },
      { path: 'expenses', component: ExpensesComponent, data: { title: 'MyNotes | Expenses' } }
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

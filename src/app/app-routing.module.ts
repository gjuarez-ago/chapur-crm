import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RecoveryPasswordComponent } from './pages/auth/recovery-password/recovery-password.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'l', component: SideMenuComponent, children: [
      { path: "customers", component: CustomersComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "reports", component: ReportsComponent },
      { path: "tickets", component: TicketsComponent },
      { path: '', pathMatch: 'full', redirectTo: '/login' },
    ],
    // canActivate: [ AuthGuard ]
  },
  {
    path: '', component: AuthComponent, children: [
      { path: "login", component: LoginComponent },
      { path: "recovery-password", component: RecoveryPasswordComponent },
      { path: "reset-password/:token/:email", component: ResetPasswordComponent },
      { path: '', pathMatch: 'full', redirectTo: '/login' },

    ]
  },
  { path: '**', component: LoginComponent, redirectTo: '' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginComponent } from './pages/auth/login/login.component';
import { RecoveryPasswordComponent } from './pages/auth/recovery-password/recovery-password.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NgZoroModulesComponents } from './modules/ng-zorro-modules-components';
import { NgxCaptchaModule } from 'ngx-captcha';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoveryPasswordComponent,
    ResetPasswordComponent,
    CustomersComponent,
    TicketsComponent,
    DashboardComponent,
    ReportsComponent,
    SideMenuComponent,
    AuthComponent
  ],
  imports: [
    NgZoroModulesComponents,
    ReactiveFormsModule,
    BrowserModule,
    NgxCaptchaModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

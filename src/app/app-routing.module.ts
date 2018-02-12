import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashMainComponent } from './dash-main/dash-main.component';
import { Component1Component } from './component1/component1.component';
import { ProgressbarComponent } from './progressbar/progressbar.component'
import { MailComponent } from './mail/mail.component';
import { WidgetComponent } from './widget/widget.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {
    path: 'dashboard',
    children: [
      {
        path: '',pathMatch: 'full', redirectTo: 'analytics'},
      {
        path: 'analytics',
        component: DashboardComponent,
        children: [
          { path: '',component: DashMainComponent},
          { path: 'mail',component: MailComponent},
          { path: 'widgets',component: WidgetComponent},
          { path: 'layout',component: Component1Component},
          { path: 'submit',component: ProgressbarComponent},
          { path: 'analytics', redirectTo: '', pathMatch: 'full' }
        ]
      }
    ]
  },
  {
    path: 'login',component: LoginComponent  
  },
  {
    path: 'signup',component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

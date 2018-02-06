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
          { path: 'mail',component: Component1Component},
          { path: 'widgets',component: Component1Component},
          { path: 'layout',component: Component1Component},
          { path: 'submit',component: ProgressbarComponent},
          { path: 'analytics', redirectTo: '', pathMatch: 'full' }
        ]
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

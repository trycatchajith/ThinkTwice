import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonService } from './common.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DashMainComponent } from './dash-main/dash-main.component';
import { Component1Component } from './component1/component1.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { MailComponent } from './mail/mail.component';
import { WidgetComponent } from './widget/widget.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    DashMainComponent,
    Component1Component,
    ProgressbarComponent,
    MailComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

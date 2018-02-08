import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash-main',
  templateUrl: './dash-main.component.html',
  styleUrls: ['./dash-main.component.scss']
})
export class DashMainComponent implements OnInit {
  totalUsedArticle = 120100;
  totalRemaningArticle = 10000;

  totalWordProcessed = 25000;
  totalRemainingWords = 75100;
  constructor(private commonService:CommonService,private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
     this.commonService.changeHeader("Dashboard");
  }
  sendMeHome() {
  this.router.navigate(['dashboard/analytics/submit']);
  }
}

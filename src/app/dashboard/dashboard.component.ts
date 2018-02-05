import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalUsedArticle = 120100;
  totalRemaningArticle = 10000;

  totalWordProcessed = 25000;
  totalRemainingWords = 75100;

  constructor() { }

  ngOnInit() {

  }

}

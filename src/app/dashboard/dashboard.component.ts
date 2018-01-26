import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
    '../../assets/vendor/metisMenu/metisMenu.min.css',
    '../../assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../assets/dist/css/sb-admin-2.css',
    '../../assets/vendor/morrisjs/morris.css',
    '../../assets/vendor/font-awesome/css/font-awesome.min.css']
})
export class DashboardComponent implements OnInit {

  totalUsedArticle = 0;
  totalRemaningArticle = 0;

  totalWordProcessed = 0;
  totalRemainingWords = 0;
  
  constructor() { }

  ngOnInit() {

  }

}

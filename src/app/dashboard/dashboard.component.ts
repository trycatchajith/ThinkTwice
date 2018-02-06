import { Component, OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  headerText:string;
  constructor(private commonService:CommonService) { }
  ngOnInit() {
    console.log("am here u baby");
    this.commonService.cast.subscribe(headerText=> this.headerText = headerText);
    this.commonService.changeHeader('Dashboard');
  }
}

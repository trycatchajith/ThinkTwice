import { Component, OnInit} from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  constructor(private commonService:CommonService) { }
  ngOnInit() {
     this.commonService.changeHeader("Component");
  }

}

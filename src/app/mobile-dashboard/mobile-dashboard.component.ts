import { Component, Input, OnInit } from '@angular/core';
import { IMobile } from '../models/mobile';
import { mobileArr } from '../const/mobileConst';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {
  mobileProductArr : Array<IMobile> = mobileArr
  
  constructor() { }

  ngOnInit(): void {
  }

}

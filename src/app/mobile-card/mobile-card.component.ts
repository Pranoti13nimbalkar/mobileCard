import { Component, Input, OnInit } from '@angular/core';
import { IMobile } from '../models/mobile';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent implements OnInit {
@Input() getMobileObj !: IMobile
addToCart:number=0;
  constructor() { }

  ngOnInit(): void {
  }
onAdd(){
  if(this.addToCart<10){
    this.addToCart ++
  }
}
ondelete(){
if(this.addToCart>0){
    this.addToCart --
  }
}
}

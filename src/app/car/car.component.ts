import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() car: any;
  @Output() updateCar = new EventEmitter<any>();
  @Output() deleteCar = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}

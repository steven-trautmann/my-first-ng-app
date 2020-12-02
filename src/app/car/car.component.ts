import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() color:string | undefined;
  @Output() addColor = new EventEmitter<String>()
  constructor() { }

  ngOnInit(): void {
  }

  addToColors(){
    this.addColor.emit(this.color);
  }
}

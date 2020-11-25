import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  colors = ["red", "yellow", "white", "brown"];
  constructor() { }

  ngOnInit(): void {
  }

  addToColors(passed:any){
    this.colors.push(passed);
  }

}

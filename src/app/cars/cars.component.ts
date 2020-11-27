import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Text } from '@angular/compiler/src/i18n/i18n_ast';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  colors = ["red", "yellow", "white", "brown"];
  name: string = "";
  sampleName: string = "";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  addToColors(passed: any) {
    this.colors.push(passed);
  }

  onNameKeyUp(event: any) {
    this.name = event.target.value;
  }

  postNew(){
    this.httpClient.post("http://localhost:8080/car/new", {
      name: this.name
    }).subscribe(
      (data) => {
        this.name = "";
      })
  }

  getSample() {
    this.httpClient.get("http://localhost:8080/car/sample", {responseType: "text"}).subscribe(
      (data) => {
        this.sampleName = data;
      }
    )
  }

}

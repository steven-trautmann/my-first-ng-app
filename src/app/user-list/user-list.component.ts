import { Component, OnInit } from '@angular/core';
import {SentenceService} from "../service/sentence.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  sentence:string;

  users = [
    {name: "Tamara", age: 10},
    {name: "Siren", age: 32},
    {name: "Arlon", age: 17},
    {name: "Thordon", age: 21},
]

  constructor(private sentenceService:SentenceService) {
    this.sentence = this.sentenceService.getRandom();
  }

  ngOnInit(): void {
  }

}

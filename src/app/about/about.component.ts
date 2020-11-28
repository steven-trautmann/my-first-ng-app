import { Component, OnInit } from '@angular/core';
import {SentenceService} from "../service/sentence.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  sentence:string = "";
  inputSentence:string = "";

  constructor(private sentenceService:SentenceService) {
    this.getRandom();
  }

  getRandom(){
    this.sentence = this.sentenceService.getRandom();
  }

  onInputSentenceChange(event:any){
    this.inputSentence = event.target.value;
  }

  addSentenceToService(){
    this.sentenceService.addSentence(this.inputSentence);
    this.inputSentence = "";
  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  constructor() { }

  sentences:string[] = ["fasz", "kurva", "kibaszott", "nyuszi", "gólya", "bagoly", "megnyúzlak te kopasz!", "narkós maci", "szívjunk gecc", "XDXDXDXDXD", "ne vegyétek komolyan", "I just hide my depression", "these are jokes", "i don't like swearing"];

  getRandom(){
    return this.sentences[Math.floor(Math.random() * this.sentences.length)];
  }

  addSentence(sentence:string){
    this.sentences.push(sentence);
  }
}

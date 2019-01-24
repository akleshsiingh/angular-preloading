import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  name ="name not init yet"
  constructor() { }

  getName(){
    return this.name;
  }

  setName(name: string){
     this.name = name;
  }

}

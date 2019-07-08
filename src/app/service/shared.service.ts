import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core';


@Injectable()
export class SharedService {

  @Output() fire: EventEmitter<any> = new EventEmitter();

   constructor() {
     console.log('shared service started');
   }

   change(d :any) {
    console.log('change started'); 
     this.fire.emit(d);
   }

   getEmittedValue() {
     return this.fire;
   }

} 
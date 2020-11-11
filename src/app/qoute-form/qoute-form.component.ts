import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {  Quote} from "../quote";
@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {
  newQuote = new Quote(0, '' , '', new Date());
  @Output() addQuote = new EventEmitter<Quote>();
 
  submitQuote(){
    this.addQuote.emit(this.newQuote);
      }
  constructor() { }

  ngOnInit(): void {
  }

}

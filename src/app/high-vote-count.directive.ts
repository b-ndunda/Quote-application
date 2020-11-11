import { FormsModule } from '@angular/forms';

import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[appHighVoteCount]'
})
export class HighVoteCountDirective {
  constructor(private el: ElementRef) {
    this.highlight(this.highlightColor || this.defaultColor || 'black');
  }
@Input() defaultColor: string;
@Input('myHighlight') highlightColor: string;
private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
}



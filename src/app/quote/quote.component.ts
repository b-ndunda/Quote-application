import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
      new Quote(1, 'Be the change you want to see in the world', 'Mahatma Gandhi', new Date(2002, 6 , 18)),
      new Quote(2, 'All our dreams come true if we have the courage to pursue them', 'Walt Disney', new Date(2020, 1, 15)),
      new Quote(3, 'Whoever is happy will make others happy too', 'Anne Frank', new Date(2019, 5, 20)),
      new Quote(4, 'It is during our darkest moments that we must focus to see the light', 'Aristotle', new Date(2020, 6, 10)),
      new Quote(5, 'Life is ours to be spent, not to be saved', 'D. H. Lawrence', new Date(2021, 1, 19)),
    ];

    Like(index) {
      this.quotes[index].Like++;
    }
    Dislike(index) {
      this.quotes[index].Dislike++;
    }
    highestVote(){
      let appHighVoteCount =  new Quote(0, '' , '', new Date());
      for (let i = 0; i < this.quotes.length; i++) {
        if (this.quotes[i].Like > appHighVoteCount.Like) {
          appHighVoteCount = this.quotes[i];
        }
      }
      if (appHighVoteCount.Like > 0) {
        return appHighVoteCount;
      }else {
        return;
      }
    }
    deleteQuote(isComplete, index){
      if (isComplete) {
       
        let toDelete = confirm(`Do you want to delete this quote ${this.quotes[index].name}?`);
        if (toDelete){
          this.quotes.splice(index, 1);
        }
      }
    }
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength + 1;
      quote.completeDate = new Date(quote.completeDate);
      this.quotes.push(quote);
    }
    toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    constructor() { }
    ngOnInit() {
    }
  }
  
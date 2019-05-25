import { Component, OnInit } from '@angular/core';
import { QuoteService, QuoteObject } from 'src/app/share/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes?: QuoteObject;

  constructor(
    private quoteService: QuoteService) { }

  ngOnInit() {
    // this.quoteService.GetQuoteOfTheDayAsync()
      // .then(data => this.quote = data.contents.quotes[0]);
    
    this.quoteService.GetQuoteOfTheDayAsync()
      .then(data => this.quotes = data);
  }
}

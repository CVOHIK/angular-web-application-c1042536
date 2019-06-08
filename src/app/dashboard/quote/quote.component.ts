import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/share/quote.service';
import { QuoteObject } from 'src/app/share/classes/Quote';

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
    this.quoteService.GetQuoteOfTheDayAsync()
      .then(data => this.quotes = data);
  }
}

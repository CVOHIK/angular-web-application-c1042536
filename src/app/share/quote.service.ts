import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuoteObject } from './classes/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  public async GetQuoteOfTheDayAsync() {
    await sleep(1000); // fake 1 second response for API
    return await this.http.get<QuoteObject>('https://quotes.rest/qod').toPromise();
  }

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
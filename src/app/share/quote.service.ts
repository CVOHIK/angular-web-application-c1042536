import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }
  
  public async GetQuoteOfTheDayAsync() {
    await sleep(2000); // fake 2 second response for API
    return await this.http.get<QuoteObject>('https://quotes.rest/qod').toPromise();
  }
  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export interface QuoteObject {
  success: Success;
  contents: Contents;
}

export interface Success {
  total: number;
}

export interface Contents {
  quotes: Quote[];
  copyright: string;
}

export interface Quote {
  quote: string;
  author: string;
  length: string;
  tags: string[];
  category: string;
  title: string;
  date: string;
  id?: any;
}
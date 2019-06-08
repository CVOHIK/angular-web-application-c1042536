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
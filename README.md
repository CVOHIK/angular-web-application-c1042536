# AntwerpDigital by Arthur van de Vondervoort
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7 and upgraded to version 8.0.2.

## Structure
The idea was how to make a clean structure of modules and components so that the solution could grown to let's say more than 100 modules and keep a manageable structure. Implemented the solution of [Angular 6 App Structure With Multiple Modules](https://www.technouz.com/4772/angular-6-app-structure-with-multiple-modules/).

## Lazy loading 
Optimized the solution that only the required modules are loaded with the [Lazy Loading Feature](https://angular.io/guide/lazy-loading-ngmodules).
An example in /src/app/core/core-routing.module.ts:

```javascript
{
  path: 'religion',
  loadChildren: () => import('../religion/religion.module').then(m => m.ReligionModule)
}
```

## Async/Await
Build the quote of the day with async/await with Promise.
Added a fake extra second for the API to response, so the async methode is visible on the page itself.

/src/app/share/quote.service.ts
```javascript
public async GetQuoteOfTheDayAsync() {
  await sleep(1000); // fake 1 second response for API
  return await this.http.get<QuoteObject>('https://quotes.rest/qod').toPromise();
}
```

/src/app/dashboard/quote/quote.component.ts
```javascript
this.quoteService.GetQuoteOfTheDayAsync()
  .then(data => this.quotes = data);
```

## Observable
The religion module is build with Observables.

/src/app/share/geodata-antwerp.service.ts
```javascript
private _religionLocationsObject = new Subject<ReligionLocationsObject>(); // Observable source
religionLocationsObject$ = this._religionLocationsObject.asObservable();   // Observable stream

public GetLocationsOfReligions(type?: string, subtype?: string) {
  this.http.get<ReligionLocationsObject>(this.ConstructUrl(type, subtype))
    .subscribe(data => {
      this._religionLocationsObject.next(data);
      this.GenerateListOfNames(data);
    });
}
```

### Naming conventions for observables
> Because Angular applications are mostly written in TypeScript, you will typically know when a variable is an observable. Although the Angular framework does not enforce a naming convention for observables, you will often see observables named with a trailing “$” sign.
> 
> This can be useful when scanning through code and looking for observable values. Also, if you want a property to store the most recent value from an observable, it can be convenient to simply use the same name with or without the “$”.
Source: https://angular.io/guide/rx-library#naming-conventions-for-observables


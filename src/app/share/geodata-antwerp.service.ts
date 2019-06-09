import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { ReligionLocationsObject } from './classes/ReligionLocationsObject';
import { ReligionTypesObject } from './classes/ReligionTypeObject'

@Injectable({
  providedIn: 'root'
})
export class GeodataAntwerpService {
  private _religionLocationsObject = new Subject<ReligionLocationsObject>();
  private _religionTypes = new BehaviorSubject<string[]>(['']);

  religionLocationsObject$ = this._religionLocationsObject.asObservable();
  religionTypes$ = this._religionTypes.asObservable();

  constructor(private http: HttpClient) { }

  public GetLocationsOfReligions(type?: string) {
    this.http.get<ReligionLocationsObject>(this.ConstructUrl(type))
      .subscribe(data => this._religionLocationsObject.next(data));
  }

  private ConstructUrl(type?: string): string {
    // set defaults
    var baseUrl: string = 'https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/37/';
    var url: string = baseUrl + 'query?where=1%3D1&outFields=*&outSR=4326&f=json';

    if (type != undefined && type.length > 1) {
      url = baseUrl + `query?where=type%20%3D%20'${type}'&outFields=*&outSR=4326&f=json`;
    }

    return url;
  }

  public GetTypesOfReligions() {
    this.http.get<ReligionTypesObject>('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/37/query?where=1%3D1&outFields=type,subtype&returnGeometry=false&returnDistinctValues=true&outSR=4326&f=json')
      .subscribe(data => this.GenerateListofTypes(data));
  }

  private GenerateListofTypes(religionTypesObject: ReligionTypesObject) {
    var arrTypes: string[] = [];
    for (let item of religionTypesObject.features) {
      if (!arrTypes.find(x => x == item.attributes.type)) {
        arrTypes.push(item.attributes.type);
      }
    }
    this._religionTypes.next(arrTypes);
  }
}
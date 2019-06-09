import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { ReligionLocationsObject } from './classes/ReligionLocationsObject';
import { ReligionTypesObject, emptyReligionTypesObject } from './classes/ReligionTypeObject'

@Injectable({
  providedIn: 'root'
})
export class GeodataAntwerpService {
  private _religionLocationsObject = new Subject<ReligionLocationsObject>();
  private _religionTypesObject = new BehaviorSubject<ReligionTypesObject>(emptyReligionTypesObject());
  private _religionNames = new BehaviorSubject<string[]>(['']);
  private _religionTypes = new BehaviorSubject<string[]>(['']);
  private _religionSubtypes = new BehaviorSubject<string[]>(['']);

  religionLocationsObject$ = this._religionLocationsObject.asObservable();
  religionTypesObject = this._religionTypesObject.asObservable();
  religionNames$ = this._religionNames.asObservable();
  religionTypes$ = this._religionTypes.asObservable();
  religionSubtypes$ = this._religionSubtypes.asObservable();

  constructor(private http: HttpClient) { }

  public GetLocationsOfReligions(type?: string, subtype?: string) {
    this.http.get<ReligionLocationsObject>(this.ConstructUrl(type, subtype))
      .subscribe(data => {
        this._religionLocationsObject.next(data);
        this.GenerateListOfNames(data);
      });
  }

  private ConstructUrl(type?: string, subtype?: string): string {
    // set defaults
    var baseUrl: string = 'https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/37/';
    var url: string = baseUrl + 'query?where=1%3D1&outFields=*&outSR=4326&f=json';

    if (type != undefined && subtype == undefined) {
      url = baseUrl + `query?where=type%20%3D%20'${type}'&outFields=*&outSR=4326&f=json`;
    }

    if (subtype != undefined) {
      url = baseUrl + `query?where=type%20%3D%20'${type}'%20AND%20subtype%20%3D%20'${subtype}'&outFields=*&outSR=4326&f=json`;
    }

    return url;
  }

  public GetReligionLocation(name: string) {
    console.log(`https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/37/query?where=UPPER(naam)%20like%20'%25${name.toUpperCase()}%25'&outFields=*&outSR=4326&f=json`)
        this.http.get<ReligionLocationsObject>(`https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/37/query?where=UPPER(naam)%20like%20'%25${name.toUpperCase()}%25'&outFields=*&outSR=4326&f=json`)
      .subscribe(data => this._religionLocationsObject.next(data));
  }


  public GetTypesOfReligions() {
    this.http.get<ReligionTypesObject>('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/37/query?where=1%3D1&outFields=type,subtype&returnGeometry=false&returnDistinctValues=true&outSR=4326&f=json')
      .subscribe(data => {
        this._religionTypesObject.next(data);
        this.GenerateListOfTypes(data);
      });
  }

  private GenerateListOfTypes(religionTypesObject: ReligionTypesObject) {
    var arrTypes: string[] = [];
    for (let item of religionTypesObject.features) {
      if (!arrTypes.find(x => x == item.attributes.type)) {
        arrTypes.push(item.attributes.type);
      }
    }
    this._religionTypes.next(arrTypes);
  }

  private GenerateListOfNames(religionLocationsObject: ReligionLocationsObject) {
    if (this._religionNames.value.length > 1) {
      return;
    }
    var arrNames: string[] = [];
    for (let item of religionLocationsObject.features) {
      if (!arrNames.find(x => x == item.attributes.naam)) {
        arrNames.push(item.attributes.naam);
      }
    }
    this._religionNames.next(arrNames);
  }

  public GenerateListOfSubtypes(religionType: string) {
    var arrSubtypes: string[] = [];
    for (let item of this._religionTypesObject.value.features) {
      if (item.attributes.type == religionType && !arrSubtypes.find(x => x == item.attributes.subtype)) {
        arrSubtypes.push(item.attributes.subtype);
      }
      this._religionSubtypes.next(arrSubtypes);
    }
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ReligionLocationsObject } from './classes/ReligionLocationsObject';

@Injectable({
  providedIn: 'root'
})
export class GeodataAntwerpService {
  private _religionLocationsObject = new Subject<ReligionLocationsObject>();
  religionLocationsObject$ = this._religionLocationsObject.asObservable();

  constructor(private http: HttpClient) { }

  public GetLocationsOfReligions() {
    this.http.get<ReligionLocationsObject>('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/37/query?where=1%3D1&outFields=*&outSR=4326&f=json')
      .subscribe(data => this._religionLocationsObject.next(data));
  }
}
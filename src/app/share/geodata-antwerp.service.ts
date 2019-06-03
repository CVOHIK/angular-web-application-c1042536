import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ReligionLocationsObject } from './classes/ReligionLocationsObject';

@Injectable({
  providedIn: 'root'
})
export class GeodataAntwerpService {
  private _religionLocationsObject = new Subject<ReligionLocationsObject>();
  religionLocationsObject = this._religionLocationsObject.asObservable();

  constructor(private http: HttpClient) { }

  public GetLocationsOfReligions() {
    this.http.get<ReligionLocationsObject>('https://opendata.arcgis.com/datasets/2126bef81c6746e086f86fdca2f87446_37.geojson')
      .subscribe(data => this._religionLocationsObject.next(data));
  }
}
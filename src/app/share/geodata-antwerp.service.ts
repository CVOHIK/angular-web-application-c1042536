import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeodataAntwerpService {

  constructor(private http: HttpClient) { }

  public async GetLocationsOfReligions() {
    await sleep(1000); // fake 1 second response for API
    return await this.http.get<ReligionLocationsObject>('https://opendata.arcgis.com/datasets/2126bef81c6746e086f86fdca2f87446_37.geojson').toPromise();
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export interface ReligionLocationsObject {
  displayFieldName: string;
  fieldAliases: FieldAliases;
  geometryType: string;
  spatialReference: SpatialReference;
  fields: Field[];
  features: Feature[];
}

export interface FieldAliases {
  OBJECTID: string;
  type: string;
  subtype: string;
  naam: string;
  straat: string;
  huisnummer: string;
  postcode: string;
  district: string;
  id: string;
  thema: string;
  grondoppervlakte: string;
  X_coordinaat: string;
  Y_coordinaat: string;
  opmerkingen_bron: string;
}

export interface SpatialReference {
  wkid: number;
  latestWkid: number;
}

export interface Field {
  name: string;
  type: string;
  alias: string;
  length?: number;
}

export interface Feature {
  attributes: Attributes;
  geometry: Geometry;
}

export interface Attributes {
  OBJECTID: number;
  type: string;
  subtype: string;
  naam: string;
  straat: string;
  huisnummer: string;
  postcode: string;
  district: string;
  id: string;
  thema: string;
  grondoppervlakte?: any;
  X_coordinaat: number;
  Y_coordinaat: number;
  opmerkingen_bron: string;
}

export interface Geometry {
  x: number;
  y: number;
}
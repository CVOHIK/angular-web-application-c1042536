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
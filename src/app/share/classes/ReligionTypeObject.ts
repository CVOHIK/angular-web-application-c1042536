export interface ReligionTypesObject {
    displayFieldName: string;
    fieldAliases: FieldAliases;
    fields?: Field[];
    features?: Feature[];
}

export function emptyReligionTypesObject(){
    return {
        displayFieldName: '',
        fieldAliases: emptyFieldAliases(),
        fields: [emptyField()],
        features: [emptyFeature()]
    }
}

export interface FieldAliases {
    type: string;
    subtype: string;
}

function emptyFieldAliases() {
    return {
        type: '',
        subtype: '',
    }
}

export interface Field {
    name: string;
    type: string;
    alias: string;
    length: number;
}

function emptyField() {
    return {
        name: '',
        type: '',
        alias: '',
        length: 0
    }
}

export interface Feature {
    attributes: Attributes;
}

function emptyFeature() {
    return {
        attributes: emptyAttributes()
    }
}

export interface Attributes {
    type: string;
    subtype: string;
}

function emptyAttributes() {
    return {
        type: '',
        subtype: ''
    }
}
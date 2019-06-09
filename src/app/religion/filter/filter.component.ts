import { Component, OnInit } from '@angular/core';
import { GeodataAntwerpService } from 'src/app/share/geodata-antwerp.service';
import { ReligionLocationsObject } from 'src/app/share/classes/ReligionLocationsObject';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  religionTypes: string[];
  religionSubtypes: string[];
  selectedType: string;
  religionLocationsObject: ReligionLocationsObject;

  // search on name
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private geodataAntwerpService: GeodataAntwerpService) { }

  ngOnInit() {
    this.geodataAntwerpService.religionTypes$
      .subscribe(data => this.religionTypes = data);

    this.geodataAntwerpService.religionSubtypes$
      .subscribe(data => this.religionSubtypes = data);

    this.geodataAntwerpService.religionLocationsObject$
      .subscribe(data => this.religionLocationsObject = data)

    this.geodataAntwerpService.religionNames$
      .subscribe(data => this.options = data);

    //search on name
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private onSelectType(event) {
    this.geodataAntwerpService.GetLocationsOfReligions(event);
    this.geodataAntwerpService.GenerateListOfSubtypes(event);
    this.selectedType = event;
  }

  private onSelectSubtype(event) {
    this.geodataAntwerpService.GetLocationsOfReligions(this.selectedType, event);
  }

  private onSelectName(event) {
    this.geodataAntwerpService.GetReligionLocation(event);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

import { Component, OnInit } from '@angular/core';
import { GeodataAntwerpService } from 'src/app/share/geodata-antwerp.service';
import { ReligionLocationsObject } from 'src/app/share/classes/ReligionLocationsObject';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  religionTypes: string[];
  religionLocationsObject: ReligionLocationsObject;

  constructor(private geodataAntwerpService: GeodataAntwerpService) { }

  ngOnInit() {
    this.geodataAntwerpService.religionTypes$
      .subscribe(data => this.religionTypes = data);

    this.geodataAntwerpService.religionLocationsObject$
      .subscribe(data => this.religionLocationsObject = data)
  }

  onSelect(event) {
    this.geodataAntwerpService.GetLocationsOfReligions(event);
  }
}

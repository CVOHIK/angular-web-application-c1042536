import { Component, OnInit } from '@angular/core';
import { GeodataAntwerpService, ReligionLocationsObject } from '../../share/geodata-antwerp.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  religionLocationsObject?: ReligionLocationsObject;

  constructor(private geodataAntwerpService:GeodataAntwerpService) { }

  ngOnInit() {
    this.geodataAntwerpService.GetLocationsOfReligions()
    .then(data => this.religionLocationsObject = data);
  }
}

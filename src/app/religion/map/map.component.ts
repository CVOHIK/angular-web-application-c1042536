import { Component, OnInit } from '@angular/core';
import { GeodataAntwerpService } from '../../share/geodata-antwerp.service';
import { ReligionLocationsObject } from 'src/app/share/classes/ReligionLocationsObject';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  religionLocationsObject: ReligionLocationsObject;

  // start in center of Antwerp
  lat: number = 51.2194475;
  lng: number = 4.4024643;
  zoom: number = 12;

  constructor(private geodataAntwerpService:GeodataAntwerpService) { }

  ngOnInit() {
    this.geodataAntwerpService.religionLocationsObject.subscribe(data => this.religionLocationsObject = data);
  }
}
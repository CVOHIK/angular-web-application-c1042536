import { Component, OnInit } from '@angular/core';
import { GeodataAntwerpService } from '../share/geodata-antwerp.service';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.css']
})
export class ReligionComponent implements OnInit {
  title: string = 'Sites for philosophy of life on the territory of the city of Antwerp';

  constructor(private geodataAntwerpService: GeodataAntwerpService) { }

  ngOnInit() {
    this.geodataAntwerpService.GetTypesOfReligions();
    this.geodataAntwerpService.GetLocationsOfReligions();
  }
}

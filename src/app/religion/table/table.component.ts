import { Component, OnInit } from '@angular/core';
import { GeodataAntwerpService } from 'src/app/share/geodata-antwerp.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private geodataAntwerpService:GeodataAntwerpService) { }

  ngOnInit() {
  }

}

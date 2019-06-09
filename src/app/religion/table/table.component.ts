import { Component, OnInit, ViewChild } from '@angular/core';
import { GeodataAntwerpService } from 'src/app/share/geodata-antwerp.service';
import { ReligionLocationsObject } from 'src/app/share/classes/ReligionLocationsObject';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable } from '@angular/material';
import { ReligionLocationsArray } from 'src/app/share/classes/ReligionLocationsArray';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  religionLocationsArray: ReligionLocationsArray[] = [];
  dataSource = new MatTableDataSource();

  //hardcoded column definitions
   displayedColumns: string[] = ['name', 'subtype', 'address', 'postcode', 'district'];

  constructor(private geodataAntwerpService: GeodataAntwerpService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.geodataAntwerpService.religionLocationsObject$
      .subscribe(data => {
        this.createArray(data);
        this.dataSource = new MatTableDataSource(this.religionLocationsArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  } 

  private createArray(religionLocationsObject: ReligionLocationsObject) {
 
    //reset the array back to empty
    this.religionLocationsArray = [];

    for (let item of religionLocationsObject.features) {
      this.religionLocationsArray.push({
        name: item.attributes.naam,
        address: item.attributes.straat + ' ' + item.attributes.huisnummer,
        district: item.attributes.district,
        postcode: item.attributes.postcode,
        subtype: item.attributes.subtype
      });
    }
  }
}


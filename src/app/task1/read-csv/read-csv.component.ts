import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-read-csv',
  templateUrl: './read-csv.component.html',
  styleUrls: ['./read-csv.component.scss']
})
export class ReadCsvComponent implements OnInit {
  public userArray: User[] = [];
  searchText: string;
  sortType = 'asc'
  headers: any = [];
  constructor(private srv: UtilService) { }
  ngOnInit(): void {
    this.getData();
  }
  doSort(col: any) {
    this.userArray = this.sortType == 'asc' ? _.sortBy(this.userArray, col) : _.sortBy(this.userArray, col).reverse();
    this.sortType = this.sortType == 'asc' ? 'desc' : 'asc';
  }
  getData() {

    this.srv.getInfo().subscribe(data => {

      const list = data.split('\n');

      list.forEach((e, index) => {
        let row = list[index].split(",");

        if (index === 0) {
          this.headers = row;
        }
        else {
          this.userArray.push(new User(
            row[0],
            row[1],
            row[2],
            row[3],
            row[4],
            row[5],
            row[6],
            row[7]
          ));
        }

      });
      // console.log(this.userArray)
    });

  }
  addItem(newItem: any) {
    console.log(newItem)
  }
}
export class User {
  Id: String;
  InternalId: String;
  Type: String;
  Billing: String;
  Email: String;
  Provider: String;
  State: String;
  Trial: String;
  constructor(
    Id: String,
    InternalId: String,
    Type: String, Billing: String, Email: String, Provider: String, State: String,
    Trial: String
  ) {
    this.Id = Id;
    this.InternalId = InternalId;
    this.Type = Type;
    this.Billing = Billing;
    this.Email = Email;
    this.Provider = Provider;
    this.State = State;
    this.Trial = Trial;

  }

}

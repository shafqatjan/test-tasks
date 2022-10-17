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
        console.log(row)
        if (index === 0) {
          this.headers = row;
          // this.userArray.push(new User(this.headers));
        }
        else {
          this.userArray.push(new User(row));
        }

      });
      console.log(this.userArray)
    });

  }
  addItem(newItem: any) {
    console.log(newItem)
  }
}
export class User {
  Headers: {};

  constructor(
    Headers: {}
  ) {
    console.log(Headers)
    this.Headers = Headers;
  }
}

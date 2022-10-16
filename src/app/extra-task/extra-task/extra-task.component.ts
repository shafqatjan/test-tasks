import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
    
interface Student {  
    id: Number;  
    name: String;  
    email: String;  
    gender: String;  
    details: String;  
    country: String;  
}  

@Component({
  selector: 'app-extra-task',
  templateUrl: './extra-task.component.html',
  styleUrls: ['./extra-task.component.scss']
})
export class ExtraTaskComponent implements OnInit {

  students: Student[] = [];  
  searchText: string;

  constructor(private srv: UtilService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.srv.getJsonData('assets/students.json').subscribe(rs => {
      this.students = JSON.parse(rs);
    })
  }
  addItem(newItem: any) {
    // console.log(newItem)
    newItem.id = this.students.length > 0 ? this.students[this.students.length - 1].id  : 1;
    newItem.id++;
    this.students.push(newItem);
  }

}

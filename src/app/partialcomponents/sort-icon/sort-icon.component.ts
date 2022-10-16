import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.scss']
})
export class SortIconComponent implements OnInit {

  @Input() icon: String;
  constructor() { }

  ngOnInit(): void {
  }

}

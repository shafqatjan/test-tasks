import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
interface MyControl {
  type: String;
  label: String;
  name: String;
  placeholder: String;
  options: any;
}
@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() mycontrol: MyControl;
  @Input() parentForm: FormGroup;
  loaded = false;
  constructor() { }

  ngOnInit(): void {

    this.loaded = true;

  }
  toTitleCase(str: any) {
    return str.toLowerCase().split(' ').map(function (word: any) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  formControl(name: any): FormControl {
    return this.parentForm.controls[name] as FormControl
  }

}

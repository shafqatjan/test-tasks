import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import studentForm from '../../../assets/form.json';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-generate-form-json',
  templateUrl: './generate-form-json.component.html',
  styleUrls: ['./generate-form-json.component.scss']
})
export class GenerateFormJsonComponent implements OnInit {

  myForm: FormGroup;
  loaded = false;
  data: string;
  mystudentforms: any = [];
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }
  getObjectValue(obj: any, path: any) {
    return _.get(obj, path);
  }
  ngOnInit(): void {
    this.mystudentforms = studentForm.controls;

    this.myForm = this.fb.group({
      Id: new FormControl('')
    });
    if (this.mystudentforms.length > 0) {
      this.mystudentforms.forEach((element: any) => {
        let validations: any = [];
        if (element.required) {
          validations.push(Validators.required)
        }
        if (element.email) {
          validations.push(Validators.email)
        }
        if (element.min != undefined) {
          validations.push(Validators.min(element.min))
        }
        if (element.max != undefined) {
          validations.push(Validators.max(element.max))
        }
        if (element.minlength != undefined) {
          validations.push(Validators.minLength(element.minLength))
        }
        if (element.maxLength != undefined) {
          validations.push(Validators.maxLength(element.maxLength))
        }

        this.myForm.addControl(element.name, new FormControl('', validations));

      });
      console.log(this.myForm);

      const settings = studentForm.settings;
      console.log(settings);

      const settingsKeys = Object.keys(settings);
      settingsKeys.forEach(key => {
        const internalSettings = _.get(settings, key);
        if (internalSettings != undefined) {
          let validations: any = [];
          if (key === 'required') {
            validations.push(Validators.required)
          }
          if (key === 'email') {
            validations.push(Validators.email)
          }
          if (key === 'min') {
            validations.push(Validators.min(internalSettings.condition.value))
          }
          if (key === 'max') {
            validations.push(Validators.max(internalSettings.condition.value))
          }
          if (key === 'minlength') {
            validations.push(Validators.minLength(internalSettings.condition.value))
          }
          if (key === 'maxLength') {
            validations.push(Validators.maxLength(internalSettings.condition.value))
          }
          console.log(key, validations);
          this.formControl(internalSettings.condition.control).valueChanges.subscribe(data => {
            this.formControl(internalSettings.name).clearValidators();

            if (internalSettings.condition.operator === '>' || internalSettings.condition.operator === '>=') {
              if (data >= internalSettings.condition.value) {
                console.log(data, internalSettings.condition.value, internalSettings.condition.operator, data >= internalSettings.condition.value);
                this.formControl(internalSettings.name).setValidators(validations);
              }
            }
            if (internalSettings.condition.operator === '<' || internalSettings.condition.operator === '<=') {
              if (data <= internalSettings.condition.value) {
                this.formControl(internalSettings.name).setValidators(validations);
              }
            }
            if (internalSettings.condition.operator === '=' || internalSettings.condition.operator === '==') {
              if (data === internalSettings.condition.value) {
                this.formControl(internalSettings.name).setValidators(validations);
              }
            }
            this.formControl(internalSettings.name).updateValueAndValidity();
            this.myForm.updateValueAndValidity();
          });

        }
      });
      this.loaded = true;
    }
  }
  formControl(name: any): FormControl {
    return this.myForm.controls[name] as FormControl
  }
  getControls() {
    return Object.keys(this.myForm.controls) || [];
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Form Values ', form.value);
    this.newItemEvent.emit(form.value);
  }

}

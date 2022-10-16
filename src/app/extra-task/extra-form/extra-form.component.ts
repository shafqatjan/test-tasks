import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-extra-form',
  templateUrl: './extra-form.component.html',
  styleUrls: ['./extra-form.component.scss']
})
export class ExtraFormComponent implements OnInit {
  myForm: FormGroup;
  loaded = false;
  data: string;
  mystudentforms: any = [];
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(
    private srv: UtilService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.srv.getJsonData('assets/students_form.json').subscribe(rs => {
      this.mystudentforms = JSON.parse(rs);
      this.myForm = this.fb.group({
        rnd: new FormControl('')
      });
      if (this.mystudentforms.length > 0) {

        this.mystudentforms.forEach((element: any) => {

          let validations: any = [];
          element.validation.forEach((el: any) => {
            if (el == 'required') {
              validations.push(Validators.required)
            }
            if (el == 'email') {
              validations.push(Validators.email)
            }
            if (el.indexOf('min:') != -1) {
              const parts: any = el.split(':');
              validations.push(Validators.minLength(parts[1]))
            }
            if (el.indexOf('max:') != -1) {
              const parts: any = el.split(':');
              validations.push(Validators.maxLength(parts[1]))
            }
          })

          this.myForm.addControl(element.name, new FormControl('', validations));

        });
        this.loaded = true;
        // console.log(this.myForm);
      }
    })
  }
  formControl(name: any): FormControl  {

    // console.log(name, this.parentForm.controls[name].errors)
    return this.myForm.controls[name] as FormControl
  }
  getControls(){
    return Object.keys(this.myForm.controls) || [];
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Form Values ', form.value);
    this.newItemEvent.emit(form.value);
  }
}

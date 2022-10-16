import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
interface MyControl {
  type: String;
  label: String;
  name: String;
  placeholder: String;
  options: any;
}
@Component({
  selector: 'app-custom-field',
  templateUrl: './custom-field.component.html',
  styleUrls: ['./custom-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomFieldComponent,
      multi: true
    }]
})
export class CustomFieldComponent implements ControlValueAccessor {
  field = "";
  @Input() mycontrol: any;
  loaded = false;
  constructor() { }
  ngOnInit(): void {
    this.loaded = true;
  }
  onChange: any = () => { }
  onTouch: any = () => { }

  // sets the value used by the ngModel of the element
  set value(val: string) {
    this.field = val
    this.onChange(val)
    this.onTouch(val)
  }

  // This will will write the value to the view if the the value changes occur on the model programmatically
  writeValue(value: any) {
    this.value = value
  }

  // When the value in the UI is changed, this method will invoke a callback function
  registerOnChange(fn: any) {
    this.onChange = fn
  }

  // When the element is touched, this method will get called
  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }
}

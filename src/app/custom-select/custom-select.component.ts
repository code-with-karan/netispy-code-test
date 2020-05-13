import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {

  onChange: () => void
  onInvalid: () => void
  onTouched: () => void
  @Input() disabled: boolean;
  @Input() modelValue: string;
  @Input() myDropDown: string = '';
  @Input() dropDown: string = '';
  @Input() list: any;
  value: string;
  constructor() { }
  writeValue(value: any): void {
    this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
  changeDropDown() {
    if (this.myDropDown == 'bottom') {
      this.dropDown = 'bottumborderdropdown'
    } else if (this.myDropDown == 'round') {
      this.dropDown = 'radiusborderdropdown'
    }
  }
  ngOnInit() {
    this.changeDropDown();
  }

}

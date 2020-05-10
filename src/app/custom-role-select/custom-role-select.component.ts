import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-role-select',
  templateUrl: './custom-role-select.component.html',
  styleUrls: ['./custom-role-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomRoleSelectComponent),
      multi: true
    }
  ]
})
export class CustomRoleSelectComponent implements OnInit, ControlValueAccessor {
  onChange: () => void
  onInvalid: () => void
  onTouched: () => void
  @Input() disabled: boolean;
  @Input() modelValue: string;
  @Input() myDropDown: string = '';
  @Input() dropDown: string = '';
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

  ngOnInit() {
    this.changeDropDown();
  }

  changeDropDown() {
    if (this.myDropDown == 'bottom') {
      this.dropDown = 'bottumborderdropdown'
    } else if (this.myDropDown == 'round') {
      this.dropDown = 'radiusborderdropdown'
    }
  }

}

import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-datepciker',
  templateUrl: './custom-datepciker.component.html',
  styleUrls: ['./custom-datepciker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDatepcikerComponent),
      multi: true
    }
  ]
})
export class CustomDatepcikerComponent implements OnInit, ControlValueAccessor {

  onChange: () => void
  onTouched: () => void
  onInvalid: () => void
  @Input() disabled: boolean;
  value: boolean;
  @Input() modelValue: string;
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
  }

}

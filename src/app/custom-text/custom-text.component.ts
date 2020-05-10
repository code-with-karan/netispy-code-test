import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextComponent),
      multi: true
    }
  ]
})
export class CustomTextComponent implements OnInit, ControlValueAccessor {
  onChange: () => void
  onTouched: () => void
  onInvalid: () => void
  @Input() disabled: boolean;
  @Input() inputPlaceholder: string;
  @Input() inputModel: string;
  @Input() inputClass: string;
  @Input() inputId: string;

  value: string;
  constructor() { }
  writeValue(value: string): void {
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

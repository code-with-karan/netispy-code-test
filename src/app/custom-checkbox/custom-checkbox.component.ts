import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-custom-checkbox',
    templateUrl: './custom-checkbox.component.html',
    styleUrls: ['./custom-checkbox.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomCheckboxComponent),
            multi: true
        }
    ]
})
export class CustomCheckboxComponent implements OnInit, ControlValueAccessor {

    onChange: () => void
    onInvalid: () => void
    onTouched: () => void
    @Input() disabled: boolean;
    value: boolean;
    constructor() { }
    writeValue(value: boolean): void {
        this.value = value ? value : false;
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

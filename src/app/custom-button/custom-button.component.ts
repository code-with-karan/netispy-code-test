import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
  //styles: [ ':host { btn btn-primary btn-block: isPrimary; }' ]
})
export class CustomButtonComponent implements OnInit {

  constructor() { }
  @Input() description: string;
  @Input() buttonClass: string = '';
  @Input() buttonId: string;
  @Input() myButton: string = '';
  @Input() myButtonClass: string = '';
  @Input() myBlock: string = '';
  @Input() myBlockClass: string = '';
  @Input() myShape: string = '';
  @Input() shape: string = '';
  ngOnInit() {
    this.button();
    this.block();
    this.buttonShape();
  }

  button() {
    if (this.myButton == 'default') {
      this.myButtonClass = 'btn btn-default'
    } else if (this.myButton == 'primary') {
      this.myButtonClass = 'btn btn-primary'
    } else if (this.myButton == 'success') {
      this.myButtonClass = 'btn btn-success'
    } else if (this.myButton == 'info') {
      this.myButtonClass = 'btn btn-success'
    } else if (this.myButton == 'warning') {
      this.myButtonClass = 'btn btn-warning'
    } else if (this.myButton == 'danger') {
      this.myButtonClass = 'btn btn-danger'
    } else if (this.myButton == 'link') {
      this.myButtonClass = 'btn btn-link'
    }
  }

  buttonShape() {
    if (this.myShape == 'circle') {
      this.shape = 'btn-circle'
    } else if (this.myShape == 'oval-medium') {
      this.shape = 'ovalmedium'
    } else if (this.myShape == 'oval-small') {
      this.shape = 'ovalsmall'
    }
  }

  block() {
    if (this.myBlock == 'default') {
      this.myBlockClass = 'btn-block';
      return
    }
  }
}

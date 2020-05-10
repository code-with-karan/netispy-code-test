import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"],
})
export class CreateAccountComponent implements OnInit {
  registrationForm: FormGroup;
  submitted: boolean;
  inputClass: string = "mt-4 txt";
  createButtonClass: string = 'success';
  createButtonBlock: string = 'default';
  registrationButtonClass: string = "btn btn-primary btn-block";
  constructor(private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      surname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      passWord: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      acceptance: new FormControl(false, [Validators.required]),
    }, this.MatchValidator);
    //this.registrationForm.setValidators();
  }

  MatchValidator(frm: AbstractControl) {
    return frm.get('passWord').value === frm.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      this.submitted = true;
      return;
    }
    this.router.navigate(['./login/']);
  }
}

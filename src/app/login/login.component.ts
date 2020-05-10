import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  loginButtonClass: string = 'primary'; //primary||secondary||info||warning||danger||link
  loginButtonBlock: string = 'default'; //default
  inputClass: string = "mt-4 txt";
  buttonName: string = "Submit";
  submitted: boolean;
  placeholder: string = "Enter Your email address";
  constructor(private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginform = new FormGroup({
      emailAddress: new FormControl("", [Validators.required, Validators.pattern(EMAIL_REGEX)])
    });
  }

  onSubmit() {
    if (this.loginform.invalid) {
      this.submitted = true;
      return;
    }
    localStorage.setItem("user", this.loginform.get('emailAddress').value);
    this.router.navigate(['./profile/']);
  }
}

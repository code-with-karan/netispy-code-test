import { Component, OnInit } from '@angular/core';
import { UserMonitoringService } from '../services/user-monitoring.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userName: string;
  consultant: string;
  dob: string;
  drug: string;
  nhs: string;
  birthDate: string;
  general: FormGroup;
  gendar: string;
  mobileNumber: string;
  address: string;
  clinicians: any;
  buttonPrimary: string = 'primary'; //primary||secondary||info||warning||danger||link
  buttonDanger: string = 'danger'; //circle||oval-medium||oval-small
  buttonShape: string = 'circle';
  buttonOval: string = 'oval-medium';
  buttonOvalSmall: string = 'oval-small';
  disableGeneral: boolean = true;
  disableClinicians: boolean = true;
  primaryHigh: string;
  primaryLow: string;
  priority: string;
  bottomDropDown: string = 'bottom'; // bottom||round
  lastContactedDate: any;
  lastContactedDr: any;

  constructor(private UserMonitoringService: UserMonitoringService) { }

  ngOnInit() {
    this.userMonitoredData();
    this.generalForm();
  }

  userMonitoredData() {
    this.UserMonitoringService.getCampBySlug().subscribe(response => {
      this.userName = response['data'][0].name;
      this.priority = response['data'][0].priority;
      this.consultant = response['data'][0].consultant;
      this.dob = response['data'][0].dob;
      this.drug = response['data'][0].drug;
      this.nhs = response['data'][0].nhs;
      this.birthDate = response['data'][0].birthdate;
      this.gendar = response['data'][0].gender;
      this.mobileNumber = response['data'][0].mobilenumber;
      this.address = response['data'][0].address;
      this.lastContactedDate = response['data'][0].lastcontact
      this.lastContactedDr = response['data'][0].lastdr;
      this.clinicians = response['assignedClinicians'];
      this.setPriority();
    }, err => {
      console.log('error', err);
    })
  }
  setPriority() {
    if (this.priority == 'high') {
      this.primaryHigh = 'primary'
    } else {
      this.primaryLow = 'primary'
    }
  }
  generalForm() {
    this.general = new FormGroup({
      gendar: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
      number: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required])
    });
  }

  editGeneral() {
    this.disableGeneral = false;
  }

  editClinicians() {
    this.disableClinicians = false;
  }

  onDisabled() {
    this.disableGeneral = true;
  }

  editCliniciansData() {
    alert('Clinicians Edited SuccessFully')
  }

  editGeneralData() {
    alert('General Edited successFully');
  }

  onDisabledClinicians() {
    this.disableClinicians = true;
  }
}

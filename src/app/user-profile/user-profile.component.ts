import { Component, OnInit } from '@angular/core';
import { UserMonitoringService } from '../services/user-monitoring.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  general: FormGroup;
  clinicians: any;
  buttonPrimary: string = 'primary'; //primary||secondary||info||warning||danger||link
  buttonDanger: string = 'danger'; //circle||oval-medium||oval-small
  buttonShape: string = 'circle';
  buttonOval: string = 'oval-medium';
  buttonOvalSmall: string = 'oval-small';
  disableGeneral: boolean = true;
  disableClinicians: boolean = true;
  primaryHigh: string = '';
  primaryLow: string = '';
  priority: string;
  bottomDropDown: string = 'bottom'; // bottom||round
  lastContactedDate: any;
  lastContactedDr: any;
  data: any;
  monitor1: any;
  gendarList: any = [{ id: 'female', value: 'Female' }, { id: 'male', value: 'Male' }, { id: 'other', value: 'Other' }]
  roleList: any = [{ id: 'Admin', value: 'Admin' }, { id: 'Read Only', value: 'Read Only' }, { id: 'Write Only', value: 'Write Only' }]
  constructor(private UserMonitoringService: UserMonitoringService) {

  }

  ngOnInit() {
    this.userMonitoredData();
    this.generalForm();
  }

  userMonitoredData() {
    this.UserMonitoringService.getCampBySlug().subscribe(async response => {
      this.data = response['data'][0];
      if (this.data.priority == "high") {
        this.primaryHigh = 'primary'
      } else {
        this.primaryLow = 'primary'
      }
      this.clinicians = response['assignedClinicians'];
      this.setFormValue();
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
  setFormValue() {
    this.general.setValue({
      gendar: this.data.gender,
      dateOfBirth: this.data.birthdate,
      number: this.data.mobilenumber,
      address: this.data.address
    });
    return
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

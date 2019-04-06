import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  mainForm: FormGroup = new FormGroup({
		firstNameControl: new FormControl('', [Validators.required]),
		lastNameControl: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(300)]),
    addressControl: new FormControl('',[Validators.required]),
    descriptionControl: new FormControl('', [Validators.required]),
    educationControl: new FormControl('', [Validators.required, Validators.minLength(5)]),
    graduationYearControl: new FormControl('', [Validators.required])
  }
	);

  firstNameControl: AbstractControl;
  lastNameControl: AbstractControl;
  addressControl: AbstractControl;
  descriptionControl: AbstractControl;
  educationControl: AbstractControl;
  graduationYearControl: AbstractControl;

  skills = [
  {name: 'HTML', selected: false},
  {name: 'CSS', selected: false},
  {name: 'JavaScript', selected: false},
  {name: 'Angular', selected: false},
  {name: 'UX', selected: false},
  {name: 'Washing dishes', selected: false},
  {name: 'Making coffee', selected: false}
];

  constructor() { }

  ngOnInit() {
    this.firstNameControl = this.mainForm.controls['firstNameControl'];
    this.lastNameControl = this.mainForm.controls['lastNameControl'];
    this.addressControl = this.mainForm.controls['addressControl'];
    this.descriptionControl = this.mainForm.controls['descriptionControl'];
    this.educationControl = this.mainForm.controls['educationControl'];
    this.graduationYearControl = this.mainForm.controls['graduationYearControl'];

  }

  selectSkill(skill) {
    skill.selected = !skill.selected;
  }

}

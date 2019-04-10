import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, AbstractControl, FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  items: FormArray;


  mainForm = this.formBuilder.group({

    theName: this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    }),

    education: this.formBuilder.group({
      school: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      graduationYear: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    }),

    address: this.formBuilder.group({
      city: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      country: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    }),

    description: ['', Validators.compose([Validators.required, Validators.minLength(20)])],

    experience: this.formBuilder.array([ this.addExp() ])
  });

  addExp(): FormGroup  {
    return this.formBuilder.group({
      company: ['', Validators.compose([Validators.minLength(3)])],
      position: ['', Validators.compose([Validators.minLength(3)])],
      period: ['', Validators.compose([Validators.minLength(3)])]
    });
  }
  get exp(): FormArray {
    return this.mainForm.get('experience') as FormArray;
  }
  onAddExp() {
    this.items = this.mainForm.get('experience') as FormArray;
    this.items.push(this.addExp());
  }
  onRemoveExp(index: number): void {
    this.items = this.mainForm.get('experience') as FormArray;
    this.items.removeAt(index);
  }



  skills = [
    {name: 'HTML', selected: false},
    {name: 'CSS', selected: false},
    {name: 'JavaScript', selected: false},
    {name: 'Angular', selected: false},
    {name: 'UX', selected: false},
    {name: 'Washing dishes', selected: false},
    {name: 'Making coffee', selected: false}
    ];

  selectSkill(skill) {
    skill.selected = !skill.selected;
  }


  onSubmit() {
    console.log(this.mainForm.value);
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.mainForm.value);
  }



}

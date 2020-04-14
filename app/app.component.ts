import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers/must-match.validator';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {

    _activeForm : string = "formType1"
    get activeForm(){
      return this._activeForm
    }
    set activeForm(value){
      this._activeForm = value;
      this.ValidatePage();
    }

    formType1: FormGroup;
    formType2: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.formType1 = this.formBuilder.group({
            jobname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });

        this.formType2 = this.formBuilder.group({
            form2value: ['RadioValue2']
        });

        this.ValidatePage();
    }

    // convenience getter for easy access to form fields
    get f1() { return this.formType1.controls; }

    onSubmit() {

        // stop here if form is invalid
        if (this.formType1.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formType1.value, null, 4));
    }

ValidatePage(){
  if(this._activeForm == "formType1")
  {
    this.formType2.disable();
  }
  else{
    this.formType1.disable();
  }
}

SubmitForm(){
  if(this._activeForm == "formType1")
  {
    console.log(JSON.stringify(this.formType1.value));
  }
  else{
    console.log(JSON.stringify(this.formType2.value));
  }
}

}

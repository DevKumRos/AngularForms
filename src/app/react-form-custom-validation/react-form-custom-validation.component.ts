import { CommonValidator } from '../common-validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-react-form-custom-validation',
  templateUrl: './react-form-custom-validation.component.html',
  styleUrls: ['./react-form-custom-validation.component.css']
})
export class ReactFormCustomValidationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.custValidationForm = this.fb.group({
    
      email:['', [Validators.required, CommonValidator.emailValidator]],
      password : ['', [Validators.required, CommonValidator.passwordValidator]],
      confirmPassword : ['', [Validators.required, CommonValidator.confirmPasswordValidator]],
      age : ['', [Validators.required, CommonValidator.ageRangeValidator]]
        
    });
    
  }
  
  get f(){
    return this.custValidationForm.controls;  
  }

  public custValidationForm;
  /*
  confirmPasswordValidator() {
    let passwordStr = "";
    return function(control: AbstractControl) :{[key: string]:boolean} | null {
    if(control.root !== undefined){
      //console.log("Test1 :", control.root);
      let controls = control.root['controls'];
      if(controls !== undefined ) {
       // console.log("Test2 :", controls['password'].value);
        passwordStr=controls['password'].value;
      }
    }
    
    
    if(control.value !== undefined ) {
      console.log("passwordStr : ", passwordStr);
      let minNumberofChars = 6;
      let maxNumberofChars = 16;
      let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if( control.value.length < minNumberofChars ) {
        return { 'minlength': true };
      } else if(control.value.length > maxNumberofChars) {
        return { 'maxlength': true };
      } else if(control.value != passwordStr) {
        return { 'correctPassword': true };
      } else if(!regularExpression.test(control.value)) {
        return { 'rightPassword': true };
      }
    }
    return null;
  }
  }*/
}

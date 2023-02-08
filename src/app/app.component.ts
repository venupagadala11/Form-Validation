import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'forms Validation';
  labelDataFromChild:string="";
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.compose([Validators.pattern("^[A-Z][a-z]*")])),
    lastName: new FormControl('',Validators.compose([Validators.pattern("^[A-Z][a-z]*")])),
    age: new FormControl('',Validators.compose([Validators.min(0),Validators.max(999),Validators.pattern("^[0-9]+$")])),
    mobileNumber: new FormControl('',Validators.compose([Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]+$")])),
    email: new FormControl('',[Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
    userName : new FormControl('',[Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]),
    additionalData : new FormControl('',[]),
  });
  
  additionalDataLabel:any|null;
  get firstName()
  {
    return this.profileForm.get('firstName')
  }

  get lastName()
  {
    return this.profileForm.get('lastName')
  }

  get age()
  {
    return this.profileForm.get('age')
  }
  
  get mobileNumber()
  {
    return this.profileForm.get('mobileNumber')
  }
  
  get email()
  {
    return this.profileForm.get('email')
  }
  
  get getUserName()
  {
    return this.profileForm.get('userName')
  }

 

  get additionalData(){
  this.additionalDataLabel=this.profileForm.value.additionalData;
  return this.profileForm.get('additionalData')
}

getLabelDataFromChild(event:string)
{
  this.labelDataFromChild=event;
}
  


  onSubmit()
  {
      console.log(this.profileForm)
  }

  constructor(){}
 

  // display:any;
  // nameValidation(sample:any)
  // {
  //   this.display=this.sample;
  // }
  // firstname : string="first name";
  // lastname:string="last name";
  // age:string ="age";
  // mobileno:string="Mobile Number";
  // constructor(){}
  
  // validateFirstName(event:string):void
  // {
  //   console.log("Hi");
  // }
  // validateLasttName(event:string)
  // {
  //   console.log("Hi");
  // }
  // validateAge(event:number)
  // {
  //   console.log("j");
  // }
  // validateMobileNumber(event:number)
  // {
  //   console.log("Hi");
  // }

}
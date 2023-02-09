import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-additional-data',
  templateUrl: './additional-data.component.html',
  styleUrls: ['./additional-data.component.css']
  
})
export class AdditionalDataComponent {
@Output() labelDataToParent= new EventEmitter;


// variable decleration
valid:boolean=true;
reference:string='';

// form group and form control data
additionalDataValidation =new FormGroup({
  dropDownData : new FormControl(""),
  dropDownoptinalType : new FormControl("")
})



labelDataToApp()
{

  // required pattetrns declerations and assined specific regex patterns
  let stringPattern = /^[A-Za-z]+$/;
  let numberPattern = /^[0-9]+$/;
  let booleanPattern = /^(?:tru|fals)e$/;
  let hexadecimalPattern = /^[#][0-9A-Fa-f]+$/;
  let binaryPattern = /^[0-1]+$/;
  let dropDownOption = this.additionalDataValidation.value.dropDownoptinalType;
  let labelData= this.additionalDataValidation.value.dropDownData;

    this.labelDataToParent.emit(labelData)
  // checking the label data type add store it i na reference 
  if (booleanPattern.test(labelData as string))
  {
      console.log('The value is a string.') ;
      this.reference = "boolean";
  }
   else if (binaryPattern.test(labelData as string))
  {
      this.reference = "binary";
  } 
  else if (stringPattern.test(labelData as string)) 
  {
    this.reference = "string";
  } 
  else if (numberPattern.test(labelData as string))
  {
    this.reference = "number";
  } 
  else if (hexadecimalPattern.test(labelData as string))
  {
    this.reference = "hexa-decimal";
  } 
console.log("drop",dropDownOption,this.reference)

  // checking the types of both option and label data type and retrun value to the alert
  if (this.reference==dropDownOption)
  {
    this.valid = true;
  }
  else
  {
      this.valid = false;
  }
  
}
}

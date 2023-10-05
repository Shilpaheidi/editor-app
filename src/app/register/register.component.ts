import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;

constructor(private fb:FormBuilder){

  this.registerForm =  this.fb.group({
    title:['',Validators.required],
    condition:['',Validators.required],
    type:['',Validators.required],
    moke:['',Validators.required],
    model:['',Validators.required],
    price:['',Validators.required],
    year:['',Validators.required],
    driveType:['',Validators.required],
    transmission:['',Validators.required],
    fuelType:['',Validators.required],
    mileage:['',Validators.required],
    engineSize:['',Validators.required],
    cylinders:['',Validators.required],
    color:['',Validators.required],
    doors:['',Validators.required],
    vin:['',Validators.required],
    description:['',Validators.required]
  })
}

onSubmit(){

}
}

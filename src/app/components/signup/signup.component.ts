import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type: string = "password";
  isText: boolean =false;
  eyeIcon:string ="fa-eye-slash";
  signUpForm!:FormGroup

  constructor(private fb: FormBuilder, private auth: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm =this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      token:[''],
      role:[''],
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon ="fa-eye" :  this.eyeIcon ="fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }
  onSignup(){
    if(this.signUpForm.valid){
      //send the obj to data
      
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res=>{
          alert(res.message);
          this.signUpForm.reset();
          this.router.navigate(['login'])
        }),
        error:(err=>{
          alert(err?.error.message)
        })
      })
      console.log(this.signUpForm.value);
     }
     else{
      //throw the error using toaster and with required field
      // console.log("form is not valid");
      ValidateForm.validateAllFormFields(this.signUpForm);
      alert("Your form is invalid");  
     }
  }
  
}

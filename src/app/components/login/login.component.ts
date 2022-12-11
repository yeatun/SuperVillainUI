import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateForm';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean =false;
  eyeIcon:string ="fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon ="fa-eye" :  this.eyeIcon ="fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }

  // onLogin(loginObj: Login){
  // this.auth.login(loginObj).subscribe((token: string)=>{
  //   localStorage.setItem('authToken',token);
  // })
  // }
  onLogin(){
     if(this.loginForm.valid){
      //send the obj to data
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          //  alert(res.message)

           console.log('reset',this.loginForm.reset());
          this.loginForm.reset();
          this.auth.storeToken(res.token)
          // this.toast.success({details:"SUCCESS", summary: res.message,duration:5000})
          this.router.navigate(['dashboard'])
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
     }
     else{
    
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your form is invalid");  
     }

  }


}

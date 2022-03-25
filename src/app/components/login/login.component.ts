import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) { 
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){

    const user = this.form.value.user;
    const pass = this.form.value.password;
    if(user == "kevin" && pass == "123"){
      this.router.navigate(['/dashboard'])
    } else{
      window.alert("Error")
    }
  }

}

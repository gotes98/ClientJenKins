import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetails = {
                uname:"",
                password:""
                };
  message="";
  constructor(private service:AuthService,private router :Router ) 
  {

  }
  ngOnInit() 
  {

  }
  SignIn()
  {
    let isvalid = this.service.Login(this.userDetails);
    if(isvalid)
    {
      this.router.navigate(['home']);

    }
    else
    {
      this.message="Incoreect Credentials";
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emp ={
    "No":"",
    "Name":"",
    "Age":""
  };
  constructor(private route:ActivatedRoute,private service:DataService,private router:Router) 
  {

  }

  ngOnInit() {
  }

  Insert()
  {
    console.log("inside Update");
    console.log(this.emp);
    let observableResult = this.service.Insert(this.emp);
    observableResult.subscribe((data)=>
    {
      console.log(data);
      this.router.navigate(['home']);
    });
  }
}

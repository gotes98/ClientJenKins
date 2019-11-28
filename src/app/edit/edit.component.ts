import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp ={
    "No":"",
    "Name":"",
    "Age":""
  };
  constructor(private route:ActivatedRoute,private service:DataService,private router:Router) 
  {

  }
  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
      console.log(result);
      let no = result.get("No");
      console.log(no);
      let observableResult = this.service.SelectById(no);
      observableResult.subscribe((data)=>
      {
        console.log(data[0]);
        this.emp= data[0];
      });
    });
  }
  Update()
  {
    console.log("inside Update");
    console.log(this.emp);
    let observableResult = this.service.Update(this.emp);
    observableResult.subscribe((data)=>
    {
      console.log(data);
      this.router.navigate(['home']);
    });
  }

}

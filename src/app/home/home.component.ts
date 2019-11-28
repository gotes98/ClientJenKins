import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{

  emps:any;
  constructor(private service:DataService) 
  {


  }
  ngOnInit() 
  {
    let observableResult = this.service.Select();
    observableResult.subscribe((result)=>
    {
      console.log(result);
      this.emps = result;
      //this.emps = [
      // {"Eno":1,"Ename":"ABC","Age":25},
      // {"Eno":2,"Ename":"PQR","Age":30},
      // {"Eno":3,"Ename":"XYZ","Age":35}
      //];
    });  
    
  }

}

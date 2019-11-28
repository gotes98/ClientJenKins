import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) 
  {

  }
  Select()
  {
    return  this.http.get("http://13.234.136.45:7788/emps");
  }
  SelectById(No)
  {
    return  this.http.get("http://13.234.136.45:7788/emps/"+No);
  }
  Insert(empObj)
  {
    return this.http.post("http://13.234.136.45:7788/emps",empObj);
  }  
  Update(empObj)
  {
    return this.http.put("http://13.234.136.45:7788/emps/"+empObj.No, empObj);
  }  
  Delete(no)
  {
    return this.http.delete("http://13.234.136.45:7788/emps/"+no);
  }  
}

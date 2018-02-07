import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class WebApiService {

  private id;

  private activity;



  constructor(private http:Http) {

   }


   allActivities()
   {
    let xhr = 
    this
    .http
    .get("http://fakerestapi.azurewebsites.net/api/Activities")
    return xhr.map((response:Response) => response.json());
   }

   getsingle(id)
   {
    let xhr = 
    this
    .http
    .get("http://fakerestapi.azurewebsites.net/api/Activities/"+ id)
    return xhr.map((response:Response) => response.json());
   }

   
  
}



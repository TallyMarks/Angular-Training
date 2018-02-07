import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WebApiService } from '../shared/services/web-api.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  private title;

  private activities=[]

  constructor(private http:Http, private webapi:WebApiService) { }

  ngOnInit() {

    this.webapi.allActivities()
    .subscribe(_activities => {
      this.activities = _activities;
      console.log(this.activities);
    })

  }

  create(title)
  {
    let data = {title:this.title}
    this
    .http
    .post("http://fakerestapi.azurewebsites.net/api/Activities", data)
    .map((response:Response)=>response.json())
    .subscribe(res=>{
      console.log(res);
      console.log(title);
    })
    
  }

}

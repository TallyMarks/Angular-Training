import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebApiService } from '../shared/services/web-api.service';
import { Http, Response } from '@angular/http' 

@Component({
  selector: 'app-activities-details',
  templateUrl: './activities-details.component.html',
  styleUrls: ['./activities-details.component.css']
})
export class ActivitiesDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private webapi: WebApiService, private http:Http) { }

  private id;
  private detail = [];
  private activity;

  ngOnInit() {

    this.route.params.subscribe(params => this.id = params.id )
    console.log(this.id)
    this.webapi.getsingle(this.id)
      .subscribe( _activity => {
        this.detail = _activity;
        console.log(this.detail)
  })

  }


  delete(id){
    
     this
     .http
     .delete("http://fakerestapi.azurewebsites.net/api/Activities/"+id)
     .map((response:Response)=>response.json())
     .subscribe(res=>{
       console.log(res);
     })
     
   }
 
    update(id, activity){
    
     let postdata={activity:this.activity}
     this
     .http
     .put("http://fakerestapi.azurewebsites.net/api/Activities/"+id, postdata)
     .map((response:Response)=>response.json())
     .subscribe(res=>{
       console.log(res);
     })
         
   }
 

}

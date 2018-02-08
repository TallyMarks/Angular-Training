import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleuserinfo',
  templateUrl: './singleuserinfo.component.html',
  styleUrls: ['./singleuserinfo.component.css']
})

export class SingleuserinfoComponent implements OnInit {
  private user=[];
  constructor(private route:ActivatedRoute, private http:Http, private router:Router) { }

private id;



  ngOnInit() {
    
    this.route.params.subscribe(params => this.id = params.id)
    this
    .http
    .get("http://fakerestapi.azurewebsites.net/api/Authors/"+ this.id)
    .map((response:Response) => response.json())
    .subscribe(response => {
      this.user = response
      console.log(response)

    } )

  }
private author = "";
  update(id)
  {
//      this.route.params.subscribe(params => this.author = params.author)
  //    this.route.params.subscribe(params => this.id = params.id)
      this.http
        .put("http://fakerestapi.azurewebsites.net/api/Authors/"+ id, this.author)
        .map( (response:Response) => response.json() )
        .subscribe(response => {

          console.log(response)
        })
  
    }
    
    delete()
    {
      this.http
      .delete("http://fakerestapi.azurewebsites.net/api/Authors/"+this.id, this.author)
      .map((response:Response) => response.json())
      .subscribe(response =>{
        console.log(response)
      });
    } 

    create()
    {
      this.http
      .post("http://fakerestapi.azurewebsites.net/api/Authors", "")
      .map((response:Response) => response.json())
      .subscribe(response =>{
        console.log(response)
      });
    }
  
  
  }
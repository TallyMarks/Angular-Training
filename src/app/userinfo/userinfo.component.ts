import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  private id;
	

  constructor(private http:Http, private router:Router) { }
  private user=[];
  ngOnInit() {
//		this.userData = JSON.parse(localStorage.getItem('userData'));
        this
        .http
        .get("http://fakerestapi.azurewebsites.net/api/Authors")
        .map((response:Response) => response.json())
        .subscribe(response => {
          this.user = response
          console.log(response)

         // let response = _response.json();
          //localStorage.setItem('userData',JSON.stringify(response));
         // this.router.navigate(['register']);
        } )




  }
  
private USER_ID = 2;
 
}

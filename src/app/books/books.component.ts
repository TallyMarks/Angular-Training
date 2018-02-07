import { Component, OnInit } from '@angular/core';
import {Http ,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  private bdata:any[];
  private Id="";
  private Title="";
  private Description="";
 
 
     
  



  Create (Title){
    let data={ Title:this.Title}
    let abx=this.http.post('http://fakerestapi.azurewebsites.net/api/Books',data)
    .map((res1)=>res1.json())
    .subscribe(request=>{

      console.log(request);
    })
  }

  Update( Id,Title){
   
     let data={Title:this.Title}
     this.http.put("http://fakerestapi.azurewebsites.net/api/Books/"+Id,data)
     .map((res)=>res.json())
     .subscribe(request=>{
 
       console.log(request);
     })
    }
  
  
  
  constructor( private http:Http ) { }

  

   

  ngOnInit() {
    this.http.get('http://fakerestapi.azurewebsites.net/api/Books').map((response:Response)=>response.json()).subscribe(res=>{this.bdata=res});
    

    
  }
  getSinglebook(Id){
   let xhr= this.http.get('http://fakerestapi.azurewebsites.net/api/Books/'+Id)
    return xhr.map((response1:Response)=>response1.json())
    
  }




  Delete(Id){
   
     this.http.delete("http://fakerestapi.azurewebsites.net/api/Books/"+Id)
     .map((res:Response)=>res.json())
     .subscribe(request=>{
 
       console.log(request);
     })
    }
}

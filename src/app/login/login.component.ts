import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private email:string;
	private password:string;
	private remember_me:boolean = false;

	constructor(
		private http:Http,
		private router:Router
	) { }

	ngOnInit() {

	}

	submit(){
		
		let post_data = {
			email: this.email,
			password: this.password,
			remember_me: this.remember_me
		}

		// GEt, POST, PUT, DELET, PATCH
		this
			.http
			.post("https://reqres.in/api/login",post_data)
			.map( (response: Response) => response.json() )
			.subscribe( 
				//success
				response => {
					if(response.token){
						this.router.navigate(['home']);
					}
				},
				//error
				error => {
					console.error(error);
				} 
			)

	}

}

/*
Normal Function
function(error){
	console.log(error);
}

Arrow Notation
(error) => {
	console.log(error)
}
 */

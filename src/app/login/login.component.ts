import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private user:any = {
		email: "",
		password: "",
	}

	constructor(
		private http:Http,
		private router:Router
	){ }

	ngOnInit() {

	}

	private USER_ID = 2;
	submit(){
		this.http
			.post("https://reqres.in/api/login", this.user)
			.map( (response:Response) => response.json() )
			.subscribe(
				response => {

						this
							.http
							.get(`https://reqres.in/api/users/${this.USER_ID}`)
							.subscribe( _response => {
								let response = _response.json();
								localStorage.setItem('userData',JSON.stringify(response));
								this.router.navigate(['register']);
							} )
			
				},
				error => {
					alert(error.json().error);
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

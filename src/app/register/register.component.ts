import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor(
		private http:Http
	) { }

	private userData;
	ngOnInit() {
		this.userData = JSON.parse(localStorage.getItem('userData'));
	}

}

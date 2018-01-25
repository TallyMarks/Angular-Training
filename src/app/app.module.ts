import { AppRouter } from './app.router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
	],
	imports: [
		RouterModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		BsDropdownModule.forRoot(),
		AppRouter
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

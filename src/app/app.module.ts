import { AppRouter } from './app.router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './login/test/test.component'


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		TestComponent
	],
	imports: [
		RouterModule,
		BrowserModule,
		FormsModule,
		BsDropdownModule.forRoot(),
		AppRouter
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

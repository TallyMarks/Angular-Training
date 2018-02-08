import { AppRouter } from './app.router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap';
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
//import { HomeComponent } from './home/home.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SingleuserinfoComponent } from './singleuserinfo/singleuserinfo.component';
//import { EditPageComponent } from './edit-page/edit-page.component';
//import { DisplayComponent } from './display/display.component';


@NgModule({
	declarations: [
		AppComponent,
//		LoginComponent,
//		RegisterComponent,
//		HomeComponent,
		UserinfoComponent,
		SingleuserinfoComponent,
//		EditPageComponent,
//		DisplayComponent,
	],
	imports: [
		RouterModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,
		BsDropdownModule.forRoot(),
		AppRouter,
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

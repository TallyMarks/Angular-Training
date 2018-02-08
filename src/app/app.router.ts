//import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import {UserinfoComponent} from './userinfo/userinfo.component'
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
import {SingleuserinfoComponent} from './singleuserinfo/singleuserinfo.component'
//import { DisplayComponent } from './display/display.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'userInfo', pathMatch: 'full' },
    //{ path: 'login', component: LoginComponent },
    //{ path: 'register', component: RegisterComponent },
  //  { path: 'home', component: HomeComponent },
    { path: 'userInfo', component: UserinfoComponent},
    { path: 'userinfo/:id', component: SingleuserinfoComponent},
//    { path: 'display', component: DisplayComponent},
]

export const AppRouter:ModuleWithProviders = RouterModule.forRoot(AppRoutes);
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './login/test/test.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'test', component: TestComponent },
]

export const AppRouter:ModuleWithProviders = RouterModule.forRoot(AppRoutes);
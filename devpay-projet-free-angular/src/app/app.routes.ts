import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { FormationDetailComponent } from './pages/formation-detail/formation-detail.component';
import { authGuard } from './guards/auth.guard';






export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },

  // 🔐 Dashboard protégé
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
     { path: 'formations', component: FormationsComponent },
     { path: 'formations/:id', component: FormationDetailComponent },
    {
  path: 'register',
  loadComponent: () =>
    import('./pages/register/register.component').then(m => m.RegisterComponent)
}
];

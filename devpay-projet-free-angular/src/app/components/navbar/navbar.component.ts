import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <h1 class="logo"> DEVPAY</h1>

      <div class="links">
        <a routerLink="/">Accueil</a>
        <a routerLink="/formations">Formations</a>
        <a routerLink="/login">Login</a>
        <a routerLink="/register">Register</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
      background: #0b399d;
      color: white;
    }

    .logo {
      font-size: 20px;
      font-weight: bold;
    }

    .links a {
      margin-left: 20px;
      text-decoration: none;
      color: white;
      font-weight: 500;
    }

    .links a:hover {
      color: #4f46e5;
    }
  `]
})
export class NavbarComponent {}
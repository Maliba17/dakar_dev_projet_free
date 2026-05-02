import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <aside class="sidebar">
      <h2>🎓 DEVPAY</h2>

      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/formations">Formations</a>

      <button (click)="logout()">Logout</button>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 200px;
      background: #111827;
      color: white;
      display: flex;
      flex-direction: column;
      padding: 20px;
      gap: 15px;
    }

    a {
      color: white;
      text-decoration: none;
    }

    button {
      margin-top: auto;
      padding: 10px;
      background: red;
      color: white;
      border: none;
    }
  `]
})
export class SidebarComponent {

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}
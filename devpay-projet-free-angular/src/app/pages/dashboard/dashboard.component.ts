import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Course } from '../../models/course.model';
import { Note } from '../../models/note.model';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="layout">

    <!-- SIDEBAR -->
    <div class="sidebar">
      
      <h2>🎓 DevPay</h2>

      <ul>
        <li (click)="section='home'" [class.active]="section==='home'">🏠 Dashboard</li>
        <li (click)="section='courses'" [class.active]="section==='courses'">📚 Mes cours</li>
        <li (click)="section='notes'" [class.active]="section==='notes'">📝 Notes</li>
        <li (click)="section='progress'" [class.active]="section==='progress'">📊 Progression</li>
        <li (click)="section='certificates'" [class.active]="section==='certificates'">🎓 Certificats</li>
        <li (click)="section='profile'" [class.active]="section==='profile'">👤 Profil</li>
        <li (click)="logout()">🚪 Déconnexion</li>
      </ul>
    </div>

    <!-- CONTENT -->
    <div class="content">
<button class="dark-toggle" (click)="toggleDarkMode()">
  🌙 Mode sombre
</button>
      <h1 *ngIf="user">Bienvenue {{ user.name }} 👋</h1>
      <!-- HOME -->
      <div *ngIf="section==='home'" class="grid">
        <div class="card">
          <h3>📚 Formations</h3>
          <p>{{ courses.length }}</p>
        </div>

        <div class="card">
          <h3>📊 Progression</h3>
          <p>{{ globalProgress }}%</p>
          
        </div>

        <div class="card">
          <h3>🎓 Certificats</h3>
          <p>{{ certificates.length }}</p>
        </div>

        <div class="card action">
          <button (click)="goToFormations()">Voir formations</button>
        </div>
      </div>

      <!-- COURSES -->
      <div *ngIf="section==='courses'" class="card">
        <h3>Mes cours</h3>
        <div *ngFor="let c of courses">
          <p>{{ c.title }}</p>
          <div class="bar">
            <div class="fill" [style.width.%]="c.progress"></div>
          </div>
        </div>
      </div>

      <!-- NOTES -->
      <div *ngIf="section==='notes'" class="card">
        <div *ngFor="let n of notes">
          <span>{{ n.course }}</span>
          <span>{{ n.score }}/20</span>
        </div>
      </div>

      <!-- CERTIFICATES -->
      <div *ngIf="section==='certificates'" class="card">
        <div *ngFor="let c of certificates">
          <span>{{ c.title }}</span>
        </div>
      </div>

      <!-- PROFILE -->
      <div *ngIf="section==='profile'" class="card">
        <p><strong>Nom :</strong> {{ user?.name }}</p>
        <p><strong>Email :</strong> {{ user?.email }}</p>
      </div>

      <div *ngIf="section==='progress'" class="card">
  <h3>📊 Progression détaillée</h3>

  <div *ngFor="let c of courses">
    <p>{{ c.title }}</p>
    <div class="bar">
      <div class="fill" [style.width.%]="c.progress"></div>
    </div>
    <small>{{ c.progress }}%</small>
  </div>
  <div *ngIf="courses.length === 0">
  Aucun cours pour le moment
</div>
</div>

    </div>
  </div>
  `,
  styles: [`
  button {
  transition: 0.3s;
}

button:hover {
  transform: scale(1.05);
}
    .layout { display: flex; height: 100vh; }
    .sidebar { width: 230px; background: #111; color: white; padding: 20px; }
    .sidebar li { cursor: pointer; margin: 10px 0; }
    .sidebar li.active { color: #4f46e5; }

    .content { flex: 1; padding: 30px; background: #f9fafb; }
.dark-toggle {
  margin-bottom: 20px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: #111827;
  color: white;
  cursor: pointer;
}
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
      gap: 20px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 10px;
      transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
}
    

    .bar { height: 8px; background: #eee; }
    .fill { height: 100%; background: #4f46e5; }
    /* DARK MODE GLOBAL */
body.dark {
  background: #0f172a;
  color: #e5e7eb;
}

/* Cards */
body.dark .card {
  background: #1e293b;
  color: #e5e7eb;
}

/* Sidebar */
body.dark .sidebar {
  background: #020617;
}

/* Inputs */
body.dark input {
  background: #1e293b;
  color: white;
  border: 1px solid #334155;
}
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    padding: 10px;
  }

  .sidebar ul {
    display: flex;
    overflow-x: auto;
    gap: 8px;
  }

  .sidebar li {
    background: #1f2937;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 12px;
  }

  .sidebar li.active {
    background: #4f46e5;
  }
}
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .content {
    padding: 15px;
  }
}
  `]
})
export class DashboardComponent implements OnInit {
  darkMode = false;

toggleDarkMode() {
  this.darkMode = !this.darkMode;
  document.body.classList.toggle('dark');
}

  section = 'home';
 user: User | null = null;
  
  courses: Course[] = [];
  notes: Note[] = [];
  certificates: Certificate[] = [];

  constructor(private auth: AuthService, private router: Router) {}

 ngOnInit() {
  this.auth.getMe().subscribe({
    next: (res) => this.user = res,
    error: () => console.log('Erreur user')
  });
  

  this.auth.getMyCourses().subscribe({
    next: (res) => this.courses = res,
    error: () => console.log('Erreur courses')
  });

  this.auth.getNotes().subscribe({
    next: (res) => this.notes = res,
    error: () => console.log('Erreur notes')
  });

  this.auth.getCertificates().subscribe({
    next: (res) => this.certificates = res,
    error: () => console.log('Erreur certifs')
  });
}loading = true;

  get globalProgress(): number {
    if (!this.courses.length) return 0;
    const total = this.courses.reduce((sum, c) => sum + c.progress, 0);
    return Math.round(total / this.courses.length);
  }

  goToFormations() {
    this.router.navigate(['/formations']);
  }

 logout() {
  if (confirm('Tu veux vraiment te déconnecter ?')) {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <div class="home">

    <app-navbar></app-navbar>
      <!-- HERO -->
      <section class="hero">
        <div class="hero-content">
          <h1>🚀 DEVPAY</h1>
          <p>
            Formations pratiques en développement web.
            Deviens développeur professionnel rapidement.
          </p>

          <div class="buttons">
            <button class="primary" (click)="goToRegister()">Commencer</button>
            <button class="secondary" (click)="goToFormations()">Voir formations</button>
          </div>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="features">
        <div class="feature">
          <h3>💻 Projets réels</h3>
          <p>Apprentissage basé sur des cas concrets</p>
        </div>

        <div class="feature">
          <h3>🎯 Objectif emploi</h3>
          <p>Préparation au marché du travail</p>
        </div>

        <div class="feature">
          <h3>💰 Stage payé</h3>
          <p>Opportunités après formation</p>
        </div>
      </section>

      <!-- FORMATIONS -->
      <section class="formations">
        <h2>🔥 Formations populaires</h2>

        <div class="grid">
          <div class="card" *ngFor="let f of formations.slice(0,6)">
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
            <span>{{ f.price }}</span>

            <button (click)="goToFormations()">Voir</button>
          </div>
        </div>

        <button class="all" (click)="goToFormations()">
          Voir toutes les formations →
        </button>
      </section>
      <app-footer></app-footer>

    </div>
  `,
  styles: [`
    .home {
      font-family: 'Segoe UI', sans-serif;
      color: #333;
    }

    /* HERO */
    .hero {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      color: white;
      padding: 40px 20px;
      text-align: center;
    }

    .hero h1 {
      font-size: 42px;
      margin-bottom: 10px;
    }

    .hero p {
      max-width: 500px;
      margin: auto;
      opacity: 0.9;
    }

    .buttons {
      margin-top: 25px;
    }

    button {
      padding: 12px 20px;
      border-radius: 8px;
      border: none;
      margin: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: 0.3s;
    }

    .primary {
      background: white;
      color: #4f46e5;
    }

    .primary:hover {
      transform: scale(1.05);
    }

    .secondary {
      background: transparent;
      border: 2px solid white;
      color: white;
    }

    .secondary:hover {
      background: white;
      color: #4f46e5;
    }

    /* FEATURES */
    .features {
      display: flex;
      justify-content: center;
      gap: 30px;
      padding: 20px 20px;
      flex-wrap: wrap;
      background: #f9fafb;
    }

    .feature {
      text-align: center;
      max-width: 200px;
    }

    /* FORMATIONS */
    .formations {
      padding: 50px 20px;
      text-align: center;
    }

    .formations h2 {
      margin-bottom: 30px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .card {
      padding: 20px;
      border-radius: 12px;
      background: white;
      box-shadow: 0 10px 20px rgba(0,0,0,0.08);
      transition: 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card span {
      display: block;
      margin: 10px 0;
      color: #10b981;
      font-weight: bold;
    }

    .card button {
      background: #4f46e5;
      color: white;
    }

    .card button:hover {
      background: #4338ca;
    }

    .all {
      margin-top: 30px;
      padding: 12px 20px;
      background: black;
      color: white;
      border-radius: 8px;
    }

    /* RESPONSIVE */
    @media (max-width: 600px) {
      .hero h1 {
        font-size: 28px;
      }
    }
  `]
})
export class HomeComponent {

  constructor(private router: Router) {}

  formations = [
    { title: 'HTML & CSS', desc: 'Bases du web', price: '50,000 FCFA' },
    { title: 'JavaScript', desc: 'Web moderne', price: '100,000 FCFA' },
    { title: 'Angular', desc: 'Apps modernes', price: '50,000 FCFA' },
    { title: 'React', desc: 'UI moderne', price: '100,000 FCFA' },
    { title: 'Docker', desc: 'DevOps', price: '100,000 FCFA' },
    { title: 'Python IA', desc: 'Data & AI', price: '100,000 FCFA' }
  ];

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToFormations() {
    this.router.navigate(['/formations']);
  }
}
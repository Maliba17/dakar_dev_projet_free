import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, startWith } from 'rxjs/operators';
import { Formation } from '../../models/formation.model';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="page">

    <!-- HEADER -->
    <div class="header">
      <h1>🚀 Nos Formations</h1>
      <p>Apprends les compétences les plus demandées du marché</p>
    </div>

    <!-- SEARCH -->
    <div class="search-box">
      <input
        type="text"
        placeholder="🔎 Rechercher une formation..."
        (input)="search$.next($any($event.target).value)"
      />
    </div>

    <!-- FILTERS -->
    <div class="filters">
      <button
        *ngFor="let cat of categories"
        (click)="filterCategory(cat)"
        [class.active]="selectedCategory === cat"
        class="chip"
      >
        {{ cat }}
      </button>
    </div>

    <!-- GRID -->
    <div class="grid">

      <div class="card" *ngFor="let f of filteredFormationsList">

        <div class="badge">{{ f.category }}</div>

        <h3>{{ f.title }}</h3>
        <p>{{ f.description }}</p>

        <div class="meta">
          <span>📊 {{ f.level }}</span>
          <span>⏱ {{ f.duration }}</span>
        </div>

        <div class="price">
          <span class="old">{{ f.oldPrice }}</span>
          <span class="new">{{ f.price }}</span>
        </div>

        <button (click)="goToDetail(f.id)">
          Voir la formation →
        </button>

      </div>

    </div>

  </div>
  `,
  styles: [`
    .page { padding: 30px; background: #f8fafc; min-height: 100vh; }
    .header { text-align: center; margin-bottom: 20px; }
    .search-box { display: flex; justify-content: center; margin-bottom: 20px; }

    input {
      width: 100%;
      max-width: 500px;
      padding: 12px;
      border-radius: 10px;
      border: 1px solid #ddd;
    }

    .filters {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 30px;
    }

    .chip {
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid #ddd;
      background: white;
      cursor: pointer;
    }

    .chip.active {
      background: #4f46e5;
      color: white;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    }

    .badge {
      background: #4f46e5;
      color: white;
      padding: 4px 8px;
      border-radius: 10px;
      font-size: 10px;
      display: inline-block;
    }

    .meta {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin: 10px 0;
    }

    .old { text-decoration: line-through; color: gray; }
    .new { color: green; font-weight: bold; }

    button {
      width: 100%;
      padding: 10px;
      border: none;
      background: #4f46e5;
      color: white;
      border-radius: 10px;
      cursor: pointer;
    }
  `]
})
export class FormationsComponent implements OnInit {

  constructor(private router: Router) {}

  // RXJS SEARCH
  search$ = new Subject<string>();

  search = '';
  selectedCategory = 'Toutes';

  categories = ['Toutes', 'Frontend', 'Backend', 'DevOps', 'Mobile', 'IA'];

  // ✅ IMPORTANT : déclaration manquante corrigée
  filteredFormationsList: Formation[] = [];

  formations: Formation[] = [
    {
      id: 1,
      title: 'Angular Masterclass',
      description: 'Deviens expert Angular avec projets réels',
      category: 'Frontend',
      level: 'Intermédiaire',
      duration: '40h',
      price: '50,000 FCFA',
      oldPrice: '150,000 FCFA'
    },
    {
      id: 2,
      title: 'React Pro',
      description: 'Créer des interfaces modernes',
      category: 'Frontend',
      level: 'Intermédiaire',
      duration: '40h',
      price: '100,000 FCFA',
      oldPrice: '350,000 FCFA'
    },
    {
      id: 3,
      title: 'Docker & DevOps',
      description: 'Déploiement moderne',
      category: 'DevOps',
      level: 'Avancé',
      duration: '35h',
      price: '90,000 FCFA',
      oldPrice: '300,000 FCFA'
    }
  ];

  ngOnInit() {
    this.filteredFormationsList = this.formations;

    this.search$
      .pipe(
        debounceTime(300),
        startWith('')
      )
      .subscribe((term: string) => {
        this.applyFilters(term);
      });
  }

  filterCategory(cat: string) {
    this.selectedCategory = cat;
    this.applyFilters(this.search);
  }

  applyFilters(term: string) {
    this.search = term.toLowerCase();

    this.filteredFormationsList = this.formations.filter(f =>
      (this.selectedCategory === 'Toutes' || f.category === this.selectedCategory) &&
      f.title.toLowerCase().includes(this.search)
    );
  }

  goToDetail(id: number) {
    this.router.navigate(['/formations', id]);
  }
}
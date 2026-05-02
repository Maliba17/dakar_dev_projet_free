import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formation-detail',
  standalone: true,
  imports: [CommonModule],
 template: `
<div class="page" *ngIf="formation">

  <div class="card">

    <div class="header">
      <h1>{{ formation.title }}</h1>
      <span class="tag">{{ formation.category }}</span>
    </div>

    <p class="description">
      {{ formation.description }}
    </p>

    <div class="info">
      <div class="item">
        ⏱️ <span>Durée :</span> 30h
      </div>
      <div class="item">
        📊 <span>Niveau :</span> Intermédiaire
      </div>
      <div class="item">
        ⭐ <span>Note :</span> 4.8/5
      </div>
    </div>

    <button (click)="inscrire()">
      🚀 S’inscrire maintenant
    </button>

  </div>

</div>
`,
styles: [`
.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  padding: 20px;
  font-family: Arial, sans-serif;
}

.card {
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: fadeIn 0.5s ease;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 24px;
  margin: 0;
  color: #111;
}

.tag {
  background: #4f46e5;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
}

.description {
  color: #555;
  line-height: 1.5;
  font-size: 14px;
}

.info {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.item {
  background: #f3f4f6;
  padding: 10px;
  border-radius: 10px;
  font-size: 13px;
  flex: 1;
  text-align: center;
}

.item span {
  font-weight: bold;
}

button {
  margin-top: 10px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`]
})
export class FormationDetailComponent {

  formation: any;

  formations = [
    { id: 1, title: 'Angular', description: 'Frontend framework', category: 'frontend' },
    { id: 2, title: 'React', description: 'UI library', category: 'frontend' },
    { id: 3, title: 'Node.js', description: 'Backend JS', category: 'backend' },
    { id: 4, title: 'NestJS', description: 'Backend framework', category: 'backend' }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formation = this.formations.find(f => f.id === id);
  }

  inscrire() {
    alert('Inscription réussie 🎉');
  }
}
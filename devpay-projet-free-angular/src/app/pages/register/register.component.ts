import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <div class="page">

    <div class="card">

      <h2>Créer un compte 🚀</h2>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <input type="text" placeholder="Nom" formControlName="name">
        <br>

        <input type="email" placeholder="Email" formControlName="email">
        <br>

        <input type="password" placeholder="Mot de passe" formControlName="password">
        <br>

        <button type="submit" [disabled]="form.invalid">
          S'inscrire
        </button>

      </form>

      <p class="error" *ngIf="errorMsg">{{ errorMsg }}</p>

    </div>

  </div>
  `,
  styles: [`
    .page {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #4f46e5, #9333ea);
    }

    .card {
      width: 360px;
      background: white;
      padding: 30px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    input {
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #ccc;
    }

    button {
      padding: 10px;
      background: #4f46e5;
      color: white;
      border: none;
      border-radius: 8px;
    }

    .error {
      color: red;
      text-align: center;
    }
  `]
})
export class RegisterComponent {

  form: FormGroup;
  errorMsg = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.auth.register(this.form.value).subscribe({
        next: () => {
          alert('Compte créé avec succès 🎉');

          // 👉 redirection login
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          this.errorMsg = "Erreur lors de l'inscription ❌";
        }
      });
    }
  }
}
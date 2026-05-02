import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
 import { Router } from '@angular/router';
 import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <div class="page">

    <div class="card">

      <h2>Bienvenue 👋</h2>
      <p class="subtitle">Connecte-toi à ton espace</p>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <div class="input-group">
          <input type="email" placeholder="Email" formControlName="email">
          <small *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
            Email invalide
          </small>
        </div>
        <br>

        <div class="input-group">
          <input type="password" placeholder="Mot de passe" formControlName="password">
          <small *ngIf="form.get('password')?.invalid && form.get('password')?.touched">
            Mot de passe requis
          </small>
        </div>
        <br>

        <button type="submit" [disabled]="form.invalid">
          Se connecter
        </button>

      </form>

      <p class="error" *ngIf="errorMsg">
        {{ errorMsg }}
      </p>

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
      font-family: Arial, sans-serif;
    }

    .card {
      width: 360px;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.25);
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    h2 {
      text-align: center;
      margin: 0;
      color: #111;
    }

    .subtitle {
      text-align: center;
      font-size: 13px;
      color: #777;
      margin-bottom: 10px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
    }

    input {
      padding: 12px;
      border-radius: 10px;
      border: 1px solid #ddd;
      outline: none;
      transition: 0.3s;
    }

    input:focus {
      border-color: #4f46e5;
      box-shadow: 0 0 6px rgba(79,70,229,0.4);
    }

    small {
      color: red;
      font-size: 11px;
      margin-top: 4px;
    }

    button {
      margin-top: 10px;
      padding: 12px;
      border: none;
      border-radius: 10px;
      background: #4f46e5;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }

    button:hover {
      background: #4338ca;
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .error {
      text-align: center;
      color: red;
      font-size: 12px;
    }
  `]
})


export class LoginComponent {

  form: FormGroup;
  errorMsg: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.nonNullable.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required]
});
  }

  onSubmit() {
  if (this.form.valid) {

    console.log(this.form.value); // 🔥 AJOUTE ÇA

    this.auth.login(this.form.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err); // 🔥 IMPORTANT
        this.errorMsg = 'Email ou mot de passe incorrect ❌';
      }
    });
  }
  
}
}
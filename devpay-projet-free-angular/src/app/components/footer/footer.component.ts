import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>© 2026 DEVPAY - Tous droits réservés</p>
      <p>Développé avec ❤️ en Angular</p>
    </footer>
  `,
  styles: [`
    .footer {
      background: #111827;
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 50px;
    }
  `]
})
export class FooterComponent {}
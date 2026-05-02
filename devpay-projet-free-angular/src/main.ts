import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/auth.interceptor';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimations } from '@angular/platform-browser/animations';





bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(  
      withInterceptors([authInterceptor])
),
    provideRouter(routes), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
});

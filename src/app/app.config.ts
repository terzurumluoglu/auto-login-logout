import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from './services';
import { StorageListenerService } from './shared/services/storage-listener/storage-listener.service';

export const loginControl = (auth: AuthService) => () => auth.loginControl();

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    StorageListenerService,
    {
      provide: APP_INITIALIZER,
      useFactory: loginControl,
      multi: true,
      deps: [AuthService, StorageListenerService],
    },]
};

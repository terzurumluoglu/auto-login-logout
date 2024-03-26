import { Injectable } from '@angular/core';
import { USER } from '../../../constants/localstorage-keys';
import { AuthService } from 'app/services';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageListenerService {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.runListener();
  }

  runListener = () => {
    window.addEventListener('storage', this.listen);
  }

  listen = (event: StorageEvent) => {
    const { key } = event;
    if (key === USER) {
      this.auth.loginControl();
      if (this.auth.isLoggedIn) {
        this.router.navigateByUrl('dashboard');
      } else {
        this.router.navigateByUrl('login');
      }
    }
  }
}

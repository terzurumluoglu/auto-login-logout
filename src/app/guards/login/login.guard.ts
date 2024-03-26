import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services';
import { inject } from '@angular/core';
import { IUser } from '../../models/IUser';

export const loginGuard: CanActivateFn = (route, state) => {
  const auth: AuthService = inject(AuthService);
  const user: IUser = auth.user;
  if (!user) {
    return true;
  }
  const router: Router = inject(Router);
  router.navigateByUrl('dashboard');
  return false;
};

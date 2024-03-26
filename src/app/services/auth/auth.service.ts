import { Injectable } from '@angular/core';
import { USERS } from '../../mock/users';
import { ILogin } from '../../models/ILogin';
import { IUser } from '../../models/IUser';
import { BehaviorSubject } from 'rxjs';
import { UtilsService } from '../../shared/services/utils/utils.service';
import { USER } from '@constants/localstorage-keys';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #user$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(undefined);

  constructor(private readonly utils: UtilsService) { }

  set user(user: IUser) {
    this.#user$.next(user);
    if (!!user) {
      localStorage.setItem(USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER);
    }
  }

  get user(): IUser {
    return this.#user$.value;
  }

  get isLoggedIn() {
    return !!this.user;
  }

  loginControl = () => {
    const userAsString = localStorage.getItem(USER);
    const user = this.utils.isJsonString<IUser>(userAsString);
    this.user = user;
  };

  getUserByEmailAndPassword = (loginCredential: ILogin): IUser | undefined => {
    const userWithPassword: IUser | undefined = USERS.find(
      (user) => user.password === loginCredential.password
    );

    if (!userWithPassword) {
      return undefined;
    }
    const { password, ...user } = userWithPassword;
    this.user = user;
    return user;
  };

  logout = () => {
    this.user = undefined;
  };
}

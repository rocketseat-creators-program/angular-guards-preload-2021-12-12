import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuth().pipe(
      switchMap((isAuth: boolean) => isAuth ? of(isAuth) : of(this.router.parseUrl('login')))
    );
  }
}

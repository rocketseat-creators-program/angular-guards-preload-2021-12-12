import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAdmin().pipe(
      switchMap((isAdmin: boolean) => isAdmin ? of(isAdmin) : of(this.router.parseUrl('movies')))
    );
  }

  canLoad(): Observable<boolean | UrlTree> {
    return this.canActivate();
  }
}

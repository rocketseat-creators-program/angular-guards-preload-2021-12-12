import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface User {
  id: number;
  email: string;
  password: string;
  firstname: string;
  age: number;
  role: string;
}

export interface AuthResponse {
  accessToken: string;
  user: Omit<User, 'password'>
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  private accessToken: string = '';
  private currentUserSubject = new BehaviorSubject<Omit<User, 'password'> | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(user: Pick<User, 'email' | 'password'>): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, user).pipe(
      tap((res: AuthResponse) => {
        this.setCurrentUser(res);
        this.router.navigate(['movies']);
      })
    );
  }

  logout(): void {
    this.removeCurrentUser();
    this.router.navigate(['login']);
  }

  setCurrentUser(res: AuthResponse): void {
    this.accessToken = res.accessToken;
    this.currentUserSubject.next(res.user);
  }

  removeCurrentUser(): void {
    this.accessToken = '';
    this.currentUserSubject.next(null);
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  isAuth(): Observable<boolean> {
    return this.currentUserSubject.asObservable().pipe(
      switchMap(user => of(Boolean(user)))
    );
  }

  isAdmin(): Observable<boolean> {
    return this.currentUserSubject.asObservable().pipe(
      switchMap(user => of(user?.role === 'admin'))
    );
  }
}

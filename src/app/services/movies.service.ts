import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

export interface Movie {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getAllMovies(): Observable<Movie[]> {
    const headers = this.getAuthorizationHeader();
    return this.http.get<Movie[]>(`${this.apiUrl}/movies`, { headers });
  }

  getMovieById(movieId: number): Observable<Movie> {
    const headers = this.getAuthorizationHeader();
    return this.http.get<Movie>(`${this.apiUrl}/movies/${movieId}`, { headers });
  }

  createMovie(movie: Omit<Movie, 'id'>): Observable<Movie> {
    const headers = this.getAuthorizationHeader();
    return this.http.post<Movie>(`${this.apiUrl}/movies`, movie, { headers });
  }

  updateMovie(movie: Movie): Observable<Movie> {
    const headers = this.getAuthorizationHeader();
    return this.http.put<Movie>(`${this.apiUrl}/movies/${movie.id}`, movie, { headers });
  }

  deleteMovieById(movieId: number): Observable<Movie> {
    const headers = this.getAuthorizationHeader();
    return this.http.delete<Movie>(`${this.apiUrl}/movies/${movieId}`, { headers });
  }

  getAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.authService.getAccessToken()}`});
  }

}

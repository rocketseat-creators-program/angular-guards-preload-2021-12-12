import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies$!: Observable<Movie[]>

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies$ = this.moviesService.getAllMovies();
  }

}

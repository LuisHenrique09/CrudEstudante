import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudantes } from './Estudantes';

@Injectable({
  providedIn: 'root'
})
export class EstudantesService {

  constructor(private http: HttpClient) { }

  getEstudantes(): Observable<Estudantes[]> {
    let url = "http://localhost:3000/Estudantes";
    return this.http.get<Estudantes[]>(url);
    
  }
}

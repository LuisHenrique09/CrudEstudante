import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudantes } from './Estudantes';

@Injectable({
  providedIn: 'root'
})
export class EstudantesService {
  update(value: any) {
    throw new Error('Method not implemented.');
  }
  url = "http://localhost:3000/Estudantes";
  constructor(private http: HttpClient) { }

  getEstudantes(): Observable<Estudantes[]> {
    
    return this.http.get<Estudantes[]>(this.url);
  }

  save(estudantes: Estudantes): Observable<Estudantes>{
    return this.http.post<Estudantes>(this.url, estudantes);
  }

  delete(estudantes: Estudantes): Observable<void>{
    return this.http.delete<void>(`${this.url}/${estudantes.id}`);
  }

  edit(estudantes: Estudantes): Observable<Estudantes>{
    return this.http.put<Estudantes>(`${this.url}/${estudantes.id}`, estudantes);
  }


}

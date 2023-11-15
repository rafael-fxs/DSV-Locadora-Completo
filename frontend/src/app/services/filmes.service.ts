import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmes } from '../models/Filmes';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  apiUrl = 'http://localhost:5000/Filmes';
  constructor(private http: HttpClient) { }

  listar(): Observable<Filmes[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<[]>(url);
  }

  buscar(titulo: string): Observable<Filmes> {
    const url = `${this.apiUrl}/buscar/${titulo}`;
    return this.http.get<Filmes>(url);
  }

  cadastrar(Filmes: Filmes): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Filmes>(url, Filmes, httpOptions);
  }

  alterar(Filmes: Filmes): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Filmes>(url, Filmes, httpOptions);
  }

  excluir(titulo: string): Observable<any> {
    const url = `${this.apiUrl}/excluir/${titulo}`;
    return this.http.delete<string>(url, httpOptions);
  }
}

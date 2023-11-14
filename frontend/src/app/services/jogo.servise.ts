import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from '../models/Jogos';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class JogoServiceService {
  apiUrl = 'http://localhost:5000/Jogos';
  constructor(private http: HttpClient) { }

  listar(): Observable<Jogo[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<[]>(url);
  }

  buscar(titulo: string): Observable<Jogo> {
    const url = `${this.apiUrl}/buscar/${titulo}`;
    return this.http.get<Jogo>(url);
  }

  cadastrar(Jogo: Jogo): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Jogo>(url, Jogo, httpOptions);
  }

  alterar(Jogo: Jogo): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Jogo>(url, Jogo, httpOptions);
  }

  excluir(titulo: string): Observable<any> {
    const url = `${this.apiUrl}/excluir/${titulo}`;
    return this.http.delete<string>(url, httpOptions);
  }
}

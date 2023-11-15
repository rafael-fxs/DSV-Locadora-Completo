import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogos } from '../models/Jogos';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  apiUrl = 'http://localhost:5000/Jogos';
  constructor(private http: HttpClient) { }

  listar(): Observable<Jogos[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<[]>(url);
  }

  buscar(titulo: string): Observable<Jogo> {
    const url = `${this.apiUrl}/buscar/${titulo}`;
    return this.http.get<Jogos>(url);
  }

  cadastrar(Jogos: Jogos): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Jogos>(url, Jogos, httpOptions);
  }

  alterar(Jogos: Jogos): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Jogos>(url, Jogos, httpOptions);
  }

  excluir(titulo: string): Observable<any> {
    const url = `${this.apiUrl}/excluir/${titulo}`;
    return this.http.delete<string>(url, httpOptions);
  }
}

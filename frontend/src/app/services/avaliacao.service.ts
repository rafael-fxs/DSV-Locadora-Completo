import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avaliacao } from '../models/Avaliacao';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  apiUrl = 'http://localhost:5000/Avaliacao';
  constructor(private http: HttpClient) { }

  listar(): Observable<Avaliacao[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Avaliacao[]>(url);
  }

  buscar(id: string): Observable<Avaliacao> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Avaliacao>(url);
  }

  cadastrar(Avaliacao: Avaliacao): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Avaliacao>(url, Avaliacao, httpOptions);
  }

  alterar(Avaliacao: Avaliacao): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Avaliacao>(url, Avaliacao, httpOptions);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/excluir/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}

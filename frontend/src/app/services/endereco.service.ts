import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/Endereco';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  apiUrl = 'http://localhost:5000/Endereco';
  constructor(private http: HttpClient) { }

  listar(): Observable<Endereco[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Endereco[]>(url);
  }

  buscar(id: string): Observable<Endereco> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Endereco>(url);
  }

  cadastrar(Endereco: Endereco): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Endereco>(url, Endereco, httpOptions);
  }

  alterar(Endereco: Endereco): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Endereco>(url, Endereco, httpOptions);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/excluir/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}

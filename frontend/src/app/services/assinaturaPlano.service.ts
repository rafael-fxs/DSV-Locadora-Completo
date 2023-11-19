import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssinaturaPlano } from '../models/Assinatura';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AssinaturaPlanoService {
  apiUrl = 'http://localhost:5000/AssinaturaPlano'; 

  constructor(private http: HttpClient) {}

  listar(): Observable<AssinaturaPlano[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<AssinaturaPlano[]>(url);
  }

  buscar(id: number): Observable<AssinaturaPlano> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<AssinaturaPlano>(url);
  }

  cadastrar(assinatura: AssinaturaPlano): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<AssinaturaPlano>(url, assinatura, httpOptions);
  }

  alterar(assinatura: AssinaturaPlano): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<AssinaturaPlano>(url, assinatura, httpOptions);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/excluir/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}
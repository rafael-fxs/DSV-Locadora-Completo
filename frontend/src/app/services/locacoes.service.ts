import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locacao } from 'src/app/models/Locacao';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LocacoesService {
  apiUrl = 'http://localhost:5000/Locacao';
  constructor(private http: HttpClient) { }

  listar(): Observable<Locacao[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Locacao[]>(url);
  }
  cadastrar(locacao: Locacao): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Locacao>(url, Locacao, httpOptions);
  }
  atualizar(locacao: Locacao): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Locacao>(url, locacao, httpOptions);
  }
  excluir(id: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.delete<string>(url, httpOptions);
  }
}

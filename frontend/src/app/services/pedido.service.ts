import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/Pedido';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  apiUrl = 'http://localhost:5000/api/Pedido';
  constructor(private http: HttpClient) { }
  listar(): Observable<Array<Pedido>> {
    const url = `${this.apiUrl}`;
    return this.http.get<Array<Pedido>>(url);
  }
  buscar(id: number): Observable<Pedido> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pedido>(url);
  }
  cadastrar(pedido: Pedido): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, pedido, httpOptions);
  }
  alterar(pedido: Pedido): Observable<any> {
    const url = `${this.apiUrl}/${pedido.id}`;
    return this.http.put<any>(url, pedido, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}

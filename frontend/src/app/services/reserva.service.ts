import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/Reserva';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  apiUrl = 'http://localhost:5000/api/Reserva';
  constructor(private http: HttpClient) { }
  listar(): Observable<Array<Reserva>> {
    const url = `${this.apiUrl}`;
    return this.http.get<Array<Reserva>>(url);
  }
  buscar(id: number): Observable<Reserva> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Reserva>(url);
  }
  cadastrar(reserva: Reserva): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, reserva, httpOptions);
  }
  alterar(reserva: Reserva): Observable<any> {
    const url = `${this.apiUrl}/${reserva.id}`;
    return this.http.put<any>(url, reserva, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}

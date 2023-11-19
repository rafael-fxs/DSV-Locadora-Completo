import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/Fornecedor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  apiUrl = 'http://localhost:5000/Fornecedor';

  constructor(private http: HttpClient) {}

  getAllFornecedores(): Observable<Fornecedor[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Fornecedor[]>(url);
  }

  getFornecedorById(id: number): Observable<Fornecedor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Fornecedor>(url);
  }

  addFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.apiUrl}`;
    return this.http.post<Fornecedor>(url, fornecedor, httpOptions);
  }

  updateFornecedor(id: number, fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Fornecedor>(url, fornecedor, httpOptions);
  }

  deleteFornecedor(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}
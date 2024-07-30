import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.httpClient.get<Pensamento[]>(this.API);
  }
  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.httpClient.post<Pensamento>(this.API, pensamento);
  }
  deletar(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.API}/${id}`);
  }
  atualizar(pensamento: Pensamento): Observable<Pensamento> {
    return this.httpClient.put<Pensamento>(
      `${this.API}/${pensamento.id}`,
      pensamento
    );
  }
}

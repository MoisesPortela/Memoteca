import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private httpClient: HttpClient) {}

  listar(pagina: number, filtro: string): Observable<Pensamento[]> {
    const itensPorPagina = 5;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);
    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }

    return this.httpClient.get<Pensamento[]>(this.API, { params });
  }
  listarId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.httpClient.get<Pensamento>(url);
  }
  listarFavoritos(pagina: number, filtro: string): Observable<Pensamento[]> {
    const itensPorPagina = 5;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina)
      .set('favorito', true);
    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }

    return this.httpClient.get<Pensamento[]>(this.API, { params });
  }
  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.httpClient.post<Pensamento>(this.API, pensamento);
  }
  excluir(id: number): Observable<void> {
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<void>(url);
  }
  atualizar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.httpClient.put<Pensamento>(url, pensamento);
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito;
    return this.atualizar(pensamento);
  }
}

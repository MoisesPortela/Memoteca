import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'listar-pensamentos',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  filtro: string = '';
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.apresentarMural();
  }
  apresentarMural() {
    this.pensamentoService
      .listar(this.paginaAtual, this.filtro)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
  }
  carregarMaisPensamentos() {
    this.pensamentoService
      .listar(++this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }
  filtrarPensamentos() {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.pensamentoService
      .listar(this.paginaAtual, this.filtro)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
  }
  listarFavoritos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.pensamentoService
      .listarFavoritos(this.paginaAtual, this.filtro)
      .subscribe((pensamentosFavoritos) => {
        this.listaPensamentos = pensamentosFavoritos;
      });
  }
}

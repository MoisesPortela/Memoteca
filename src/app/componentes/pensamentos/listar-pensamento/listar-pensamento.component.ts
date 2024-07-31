import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'listar-pensamentos',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  listaFavoritos: Pensamento[] = [];
  filtro: string = '';
  titulo: string = 'Meu Mural';
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  favoritos: boolean = false;
  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pensamentoService
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
  }
  recarregarMural() {
    this.router.navigate([this.router.url]);
  }
  carregarMaisPensamentos() {
    this.pensamentoService
      .listar(++this.paginaAtual, this.filtro, this.favoritos)
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
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
  }
  listarFavoritos() {
    this.titulo = 'Meus Favoritos';
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.pensamentoService
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((pensamentosFavoritos) => {
        this.listaPensamentos = pensamentosFavoritos;
        this.listaFavoritos = pensamentosFavoritos;
        this.favoritos = false;
      });
  }
}

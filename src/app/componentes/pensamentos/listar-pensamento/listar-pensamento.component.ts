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

  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }
  carregarMaisPensamentos() {
    this.pensamentoService
      .listar(++this.paginaAtual)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }
}

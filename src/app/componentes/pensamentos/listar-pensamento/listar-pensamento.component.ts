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

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }
}

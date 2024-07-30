import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css',
})
export class PensamentoComponent implements OnInit {
  @Input()
  pensamento!: Pensamento;
  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 250) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
  excluirPensamento(pensamento: Pensamento) {
    this.pensamentoService.deletar(pensamento.id!).subscribe();
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css',
})
export class PensamentoComponent implements OnInit {
  @Input()
  pensamento!: { conteudo: string; autor: string; modelo: string };
  constructor() {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 250) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}

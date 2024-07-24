import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css',
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: 1,
    conteudo: 'aprendendo angular',
    autoria: 'Dev',
    modelo: '',
  };

  constructor() {}

  escreva() {
    console.log(this.pensamento);
  }
  ngOnInit() {}
}

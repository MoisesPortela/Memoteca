import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {}
  criarPensamento() {
    console.table(this.pensamento);
  }
  cancelar() {
    this.pensamento = {
      id: 1,
      conteudo: '',
      autoria: '',
      modelo: '',
    };
    this.router.navigate(['/listarPensamento']);
  }
}

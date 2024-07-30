import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css',
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autor: '',
    modelo: '',
  };

  constructor(
    private router: Router,
    private pensamentoService: PensamentoService
  ) {}

  ngOnInit() {}
  criarPensamento() {
    this.pensamentoService.criar(this.pensamento).subscribe();
    this.router.navigate(['/pensamentos']);
  }
  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
}

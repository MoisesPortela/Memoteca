import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'listar-pensamentos',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor() {}

  ngOnInit(): void {}
}

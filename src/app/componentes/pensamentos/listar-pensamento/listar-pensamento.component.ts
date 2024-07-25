import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listar-pensamentos',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'A vida é bela',
      autor: 'Desconhecido',
      modelo: 'modelo1',
    },
    {
      conteudo: 'O Dev ficará feliz com o código',
      autor: 'Chatgpt',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Atchim',
      autor: '8,2 bilhões de pessoas no mundo',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
        'in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
        'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      autor: 'githubcopilot',
      modelo: 'modelo3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

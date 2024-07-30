import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrl: './botao-carregar-mais.component.css',
})
export class BotaoCarregarMaisComponent implements OnInit {
  @Input()
  haMaisPensamentos: boolean = false;
  constructor() {}
  ngOnInit(): void {}
}

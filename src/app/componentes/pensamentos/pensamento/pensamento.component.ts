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
  @Input()
  listaFavoritos: Pensamento[] = [];
  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 250) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
  mudarIconeFavorito() {
    if (!this.pensamento.favorito) {
      return 'inativo';
    } else {
      return 'ativo';
    }
  }
  favoritarPensamento() {
    this.pensamentoService.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(
        this.listaFavoritos.indexOf(this.pensamento),
        1
      );
    });
  }
}

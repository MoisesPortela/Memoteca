import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css',
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private pensamentoService: PensamentoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autor: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      modelo: ['', [Validators.required]],
    });
  }
  criarPensamento() {
    console.log(this.formulario.get('autor')?.errors);
    if (this.formulario.valid) {
      this.pensamentoService.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/pensamentos']);
      });
    }
  }
  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
  habilitarBotao(): String {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}

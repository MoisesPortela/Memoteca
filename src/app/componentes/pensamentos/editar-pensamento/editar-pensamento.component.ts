import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css',
})
export class EditarPensamentoComponent implements OnInit {
  id!: any;
  formulario!: FormGroup;
  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pensamentoService
      .listarId(parseInt(this.id!))
      .subscribe((pensamento) => {
        this.formulario = this.formBuilder.group({
          id: [pensamento.id],
          conteudo: [
            pensamento.conteudo,
            Validators.compose([
              Validators.required,
              Validators.pattern(/(.|\s)*\S(.|\s)*/),
            ]),
          ],
          autor: [
            pensamento.autor,
            Validators.compose([Validators.required, Validators.minLength(3)]),
          ],
          modelo: [pensamento.modelo, [Validators.required]],
        });
      });
  }
  editarPensamento() {
    if (this.id) {
      this.pensamentoService.atualizar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/pensamentos']);
      });
    }
  }
  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
}

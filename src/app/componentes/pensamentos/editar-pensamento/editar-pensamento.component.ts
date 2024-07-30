import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css',
})
export class EditarPensamentoComponent implements OnInit {
  pensamento!: Pensamento;
  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pensamentoService.listarId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }
  editarPensamento() {
    if (this.pensamento.id) {
      this.pensamentoService.atualizar(this.pensamento).subscribe(() => {
        this.router.navigate(['/pensamentos']);
      });
    }
  }
  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
}

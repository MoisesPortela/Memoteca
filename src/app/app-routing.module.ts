import { NgModule, Component } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { CustomReuseStrategy } from './componentes/pensamentos/listar-pensamento/reload-strategy/custom-reuse-strategy';

const routes: Routes = [
  { path: '', redirectTo: 'pensamentos', pathMatch: 'full' },
  {
    path: 'pensamentos',
    component: ListarPensamentosComponent,
    data: { reuseComponent: true },
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent,
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent,
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy,
    },
  ],
})
export class AppRoutingModule {}

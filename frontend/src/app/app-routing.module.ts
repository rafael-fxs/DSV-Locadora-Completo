import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcasComponent } from './components/marcas/marcas.component';
import { CarrosComponent } from './components/carros/carros.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { JogosComponent } from './components/jogos/jogos.component';
import { FilmesComponent } from './component/Filmes/Filmes.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { PagamentosComponent } from './components/pagamentos/pagamentos.component';
import { LocacoesComponent } from './components/locacoes/locacoes.component';

const routes: Routes = [
  { path: 'marcas', component: MarcasComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'carros', component: CarrosComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'avaliacao', component: AvaliacaoComponent },
  { path: 'pagamentos', component: PagamentosComponent },
  { path: 'locacoes', component: LocacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

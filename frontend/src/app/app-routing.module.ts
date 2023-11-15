import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcasComponent } from './components/marcas/marcas.component';
import { CarrosComponent } from './components/carros/carros.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { JogosComponent } from './components/jogos/jogos.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { EnderecoComponent } from './components/endereco/endereco.component';

const routes: Routes = [
  { path: 'marcas', component: MarcasComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'carros', component: CarrosComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'funcionarios', component: FuncionariosComponent},
  { path: 'avaliacao', component: AvaliacaoComponent },
  { path: 'endereco', component: EnderecoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

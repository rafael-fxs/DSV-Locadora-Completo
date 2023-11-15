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
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'avaliacao', component: AvaliacaoComponent },
  { path: 'endereco', component: EnderecoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'funcionarios', component: FuncionariosComponent},
];

const routesProf: Routes = [
  { path: 'marcas', component: MarcasComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'carros', component: CarrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), [RouterModule.forRoot(routesProf)]],
  exports: [RouterModule],
})
export class AppRoutingModule {}

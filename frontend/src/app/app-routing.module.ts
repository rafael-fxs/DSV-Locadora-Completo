import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcasComponent } from './components/marcas/marcas.component';
import { CarrosComponent } from './components/carros/carros.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { JogosComponent } from './components/jogos/jogos.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';

const routes: Routes = [
  { path: 'marcas', component: MarcasComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'carros', component: CarrosComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'avaliacao', component: AvaliacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

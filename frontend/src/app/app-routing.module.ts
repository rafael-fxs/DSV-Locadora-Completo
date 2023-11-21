import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { JogosComponent } from './components/jogos/jogos.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { HomeComponent } from './components/home/home.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { AssinaturaPlanoComponent } from './components/assinaturaPlano/assinaturaPlano.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { PagamentosComponent } from './components/pagamentos/pagamentos.component';
import { LocacoesComponent } from './components/locacoes/locacoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'DSV - Locadora' },
  { path: 'avaliacao', component: AvaliacaoComponent, title: 'Avaliações' },
  { path: 'endereco', component: EnderecoComponent, title: 'Endereços' },
  { path: 'assinaturaPlano', component: AssinaturaPlanoComponent, title: 'AssinaturaPlanos' },
  { path: 'clientes', component: ClientesComponent, title: 'Clientes' },
  { path: 'jogos', component: JogosComponent, title: 'Jogos' },
  { path: 'filmes', component: FilmesComponent, title: 'Filmes' },
  { path: 'fornecedor', component: FornecedorComponent, title: 'Fornecedor' },
  { path: 'funcionarios', component: FuncionariosComponent, title: 'Funcionários'},
  { path: 'reserva', component: ReservaComponent, title: 'Reservas'},
  { path: 'pedido', component: PedidoComponent, title: 'Pedidos'},
  { path: 'pagamentos', component: PagamentosComponent, title: 'Pagamentos' },
  { path: 'locacoes', component: LocacoesComponent, title: 'Locações' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

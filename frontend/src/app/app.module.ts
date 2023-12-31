import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesService } from './services/clientes.service';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { FuncionariosService } from './services/funcionarios.service';
import { JogosComponent } from './components/jogos/jogos.component';
import { JogosService } from './services/jogos.service';
import { FilmesComponent } from './components/filmes/filmes.component';
import { FilmesService } from './services/filmes.service';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReservaComponent } from './components/reserva/reserva.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { AssinaturaPlanoService } from './services/assinaturaPlano.service';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { FornecedorService } from './services/fornecedor.service';
import { AssinaturaPlanoComponent } from './components/assinaturaPlano/assinaturaPlano.component';
import { LocacoesService } from './services/locacoes.service';
import { LocacoesComponent } from './components/locacoes/locacoes.component';
import { PagamentosService } from './services/pagamentos.service';
import { PagamentosComponent } from './components/pagamentos/pagamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    JogosComponent,
    FilmesComponent,
    FuncionariosComponent,
    AvaliacaoComponent,
    EnderecoComponent,
    HomeComponent,
    ReservaComponent,
    PedidoComponent,
    FornecedorComponent,
    AssinaturaPlanoComponent,
    LocacoesComponent,
    PagamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  providers: [
    HttpClientModule,
    ClientesService,
    JogosService,
    FilmesService,
    FuncionariosService,
    AssinaturaPlanoService,
    FornecedorService,
    LocacoesService,
    PagamentosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

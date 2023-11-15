import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrosService } from './services/carros.service';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { ClientesService } from './services/clientes.service';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { FuncionariosService } from './services/funcionarios.service';
import { MarcasService } from './services/marcas.service';
import { ModelosService } from './services/modelos.service';
import { CarrosComponent } from './components/carros/carros.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    ModelosComponent,
    ClientesComponent,
    CarrosComponent,
    JogosComponent,
    FilmesComponent,
    FuncionariosComponent,
    AvaliacaoComponent,
    EnderecoComponent,
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
  ],
  providers: [
    HttpClientModule,
    MarcasService,
    ModelosService,
    ClientesService,
    JogosService,
    FilmesService,
    FuncionariosService,
    CarrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

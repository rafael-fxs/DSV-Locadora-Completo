import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observer } from 'rxjs';
import { JogosService } from 'src/app/services/jogos.service';
import { DialogExcluirComponent } from '../dialog-excluir/dialog-excluir.component';
import { Jogos } from 'src/app/models/Jogos';


@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  displayedColumns: string[] = ['dataCriacao', 'titulo', 'genero', 'descricao', 'preco'];
  ELEMENT_DATA: Jogos[] = [];
  dataSource = new MatTableDataSource<Jogos>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private jogosService: JogosService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Lista de Jogos';

    this.formulario = new FormGroup({
      dataCriacao: new FormControl(new Date()),
      titulo: new FormControl(null),
      genero: new FormControl(null),
      descricao: new FormControl(null),
      preco: new FormControl(null),
    });

    this.listarJogos();
  }

  enviarFormulario(): void {
    const jogo: Jogos = this.formulario.value;
    const self = this;
    const observer: Observer<Jogos> = {
      next(_result): void {
        alert('Jogo salvo com sucesso.');
        self.listarJogos();
      },
      error(_error): void {
        alert('Erro ao salvar o jogo!');
      },
      complete(): void {
      },
    };
    this.jogosService.cadastrar(jogo).subscribe(observer);
  }

  listarJogos() {
    this.jogosService.listar().subscribe(jogos => {
      this.dataSource.data = jogos;
    });
  }

  excluir(row: any) {
    const dialogRef = this.dialog.open(DialogExcluirComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const self = this;
        const observer: Observer<Number> = {
          next(_result): void {
            alert('Jogo excluído com sucesso.');
            self.listarJogos();
          },
          error(_error): void {
            alert('Erro ao excluir o jogo!');
          },
          complete(): void {
          },
        };
    
        this.jogosService.excluir(row.id).subscribe(observer);
      }
    });
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observer } from 'rxjs';
import { Jogo } from 'src/app/models/Jogo';
import { JogoService } from 'src/app/services/jogo.service';
import { DialogExcluirComponent } from '../dialog-excluir/dialog-excluir.component';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  displayedColumns: string[] = ['dataCriacao', 'titulo', 'genero', 'descricao', 'preco'];
  ELEMENT_DATA: Jogo[] = [];
  dataSource = new MatTableDataSource<Jogo>(this.ELEMENT_DATA);
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
    const jogo: Jogo = this.formulario.value;
    const observer: Observer<Jogo> = {
      next(_result): void {
        alert('Jogo salvo com sucesso.');
        this.listarJogos();
      },
      error(_error): void {
        alert('Erro ao salvar o jogo!');
      },
      complete(): void {
      },
    };
    this.jogoService.cadastrar(jogo).subscribe(observer);
  }

  listarJogos() {
    this.jogoService.listar().subscribe(jogos => {
      this.dataSource.data = jogos;
    });
  }

  excluir(row: any) {
    const dialogRef = this.dialog.open(DialogExcluirComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const observer: Observer<Number> = {
          next(_result): void {
            alert('Jogo excluído com sucesso.');
            this.listarJogos();
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

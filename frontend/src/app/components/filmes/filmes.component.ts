import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observer } from 'rxjs';
import { Filme } from 'src/app/models/Filmes';
import { FilmesService } from 'src/app/services/filmes.service'; // Certifique-se de ter o serviço FilmesService no caminho correto
import { DialogExcluirComponent } from '../dialog-excluir/dialog-excluir.component';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  displayedColumns: string[] = ['dataCriacao', 'titulo', 'genero', 'descricao', 'preco'];
  ELEMENT_DATA: Filme[] = [];
  dataSource = new MatTableDataSource<Filme>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private filmesService: FilmesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Lista de Filmes';

    this.formulario = new FormGroup({
      dataCriacao: new FormControl(new Date()),
      titulo: new FormControl(null),
      genero: new FormControl(null),
      descricao: new FormControl(null),
      preco: new FormControl(null),
    });

    this.listarFilmes();
  }

  enviarFormulario(): void {
    const filme: Filme = this.formulario.value;
    const observer: Observer<Filme> = {
      next(_result): void {
        alert('Filme salvo com sucesso.');
        this.listarFilmes();
      },
      error(_error): void {
        alert('Erro ao salvar o filme!');
      },
      complete(): void {
      },
    };
    this.filmesService.cadastrar(filme).subscribe(observer);
  }

  listarFilmes() {
    this.filmesService.listar().subscribe(filmes => {
      this.dataSource.data = filmes;
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
            alert('Filme excluído com sucesso.');
            this.listarFilmes();
          },
          error(_error): void {
            alert('Erro ao excluir o filme!');
          },
          complete(): void {
          },
        };
    
        this.filmesService.excluir(row.id).subscribe(observer);
      }
    });
  }
}

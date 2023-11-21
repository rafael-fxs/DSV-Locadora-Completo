import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observer } from 'rxjs';
import { Avaliacao } from 'src/app/models/Avaliacao';
import { Cliente } from 'src/app/models/Cliente';
import { AvaliacaoService } from 'src/app/services/avaliacao.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { DialogExcluirComponent } from '../dialog-excluir/dialog-excluir.component';


@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  clientes: Array<Cliente> | undefined;
  displayedColumns: string[] = ['acao', 'id', 'clienteId', 'dataCriacao', 'classificaco', 'comentario', 'pedidoId'];
  ELEMENT_DATA: Avaliacao[] = []
  dataSource = new MatTableDataSource<Avaliacao>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private avaliacaoService : AvaliacaoService,
    private clientesService : ClientesService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Avaliar Pedido';

    this.clientesService.listar().subscribe(clientes => {
      this.clientes = clientes;
      if (this.clientes && this.clientes.length > 0) {
        this.formulario.get('clienteId')?.setValue(this.clientes[0].id);
      }
    });

    this.formulario = new FormGroup({
      atualizar: new FormControl(false),
      id: new FormControl(null),
      clienteId: new FormControl(null),
      dataCriacao: new FormControl(new Date()),
      classificacao: new FormControl(0),
      comentario: new FormControl(null),
      pedidoId: new FormControl(null),
    })

    this.listarAvaliacoes();
  }
  enviarFormulario(): void {
    const avaliacao: Avaliacao = this.formulario.value;
    const observer: Observer<Avaliacao> = {
      next(_result): void {
        alert('Avaliacao salva com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    if (this.formulario.get('atualizar') && this.formulario.get('atualizar').value == true) {
      this.avaliacaoService.alterar(avaliacao).subscribe(observer);
    } else {
      this.formulario.get('id').setValue(null);
      avaliacao.id = null;
      this.avaliacaoService.cadastrar(avaliacao).subscribe(observer);
    }
    
  }

  listarAvaliacoes() {
    this.avaliacaoService.listar().subscribe(avaliacao => {
      this.dataSource.data = avaliacao;
    });
  }
  
  excluir(row: any){
    const dialogRef = this.dialog.open(DialogExcluirComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Armazenar uma referência ao "this" atual
        const self = this;

        let observer: Observer<Number> = {
          next(_result): void {
            alert('Avaliação excluída com sucesso.');
            
            // Usar a referência armazenada para chamar o método desejado
            self.listarAvaliacoes();
          },
          error(_error): void {
            alert('Erro ao excluir!');
          },
          complete(): void {
          },
        };
    
        this.avaliacaoService.excluir(row.id).subscribe(observer);
      }
    });
  }
}

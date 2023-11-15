import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observer } from 'rxjs';
import { Cliente } from 'src/app/models/Cliente';
import { Endereco } from 'src/app/models/Endereco';
import { ClientesService } from 'src/app/services/clientes.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MatPaginator } from '@angular/material/paginator';
import { DialogExcluirComponent } from '../dialog-excluir/dialog-excluir.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements AfterViewInit {
  formulario: any;
  tituloFormulario: string = '';
  clientes: Array<Cliente> | undefined;
  enderecos: Array<Endereco> | undefined;
  displayedColumns: string[] = ['acao', 'id', 'clienteId', 'rua', 'numero', 'bairro', 'cidade', 'estado', 'complemento', 'cep'];
  ELEMENT_DATA: Endereco[] = []
  dataSource = new MatTableDataSource<Endereco>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  

  constructor(
    private enderecoService : EnderecoService,
    private clientesService : ClientesService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Cadastrar Endereço';

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
      rua: new FormControl(null),
      numero: new FormControl(null),
      bairro: new FormControl(null),
      cidade: new FormControl(null),
      estado: new FormControl(null),
      complemento: new FormControl(null),
      cep: new FormControl(null),
    })

    this.listarEnderecos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  enviarFormulario(): void {
    const endereco: Endereco = this.formulario.value;
    const observer: Observer<Endereco> = {
      next(_result): void {
        alert('Endereço salvo com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    if (this.formulario.get('atualizar') && this.formulario.get('atualizar').value == true) {
      this.enderecoService.alterar(endereco).subscribe(observer);
    } else {
      this.formulario.get('id').setValue(null);
      endereco.id = null;
      this.enderecoService.cadastrar(endereco).subscribe(observer);
    }
  }

  listarEnderecos() {
    this.enderecoService.listar().subscribe(enderecos => {
      this.dataSource.data = enderecos;
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
            alert('Endereço excluído com sucesso.');
            
            // Usar a referência armazenada para chamar o método desejado
            self.listarEnderecos();
          },
          error(_error): void {
            alert('Erro ao excluir!');
          },
          complete(): void {
          },
        };
    
        this.enderecoService.excluir(row.id).subscribe(observer);
      }
    });
  }
}
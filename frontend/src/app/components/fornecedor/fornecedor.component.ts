import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observer } from 'rxjs';
import { Fornecedor } from 'src/app/models/Fornecedor'; // Certifique-se de ter o modelo Fornecedor no caminho correto
import { FornecedorService } from 'src/app/services/fornecedor.service'; // Certifique-se de ter o serviço FornecedorService no caminho correto
import { DialogExcluirComponent } from '../dialog-excluir/dialog-excluir.component';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  displayedColumns: string[] = ['id', 'nome', 'cnpj']; // Adapte as colunas conforme as propriedades do modelo Fornecedor
  ELEMENT_DATA: Fornecedor[] = [];
  dataSource = new MatTableDataSource<Fornecedor>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private fornecedorService: FornecedorService, // Certifique-se de ter o serviço FornecedorService no caminho correto
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Lista de Fornecedores';

    this.formulario = new FormGroup({
      // Adapte os campos conforme as propriedades do modelo Fornecedor
      nome: new FormControl(null),
      cnpj: new FormControl(null),
      // Adicione outros campos conforme necessário
    });

    this.listarFornecedores();
  }

  enviarFormulario(): void {
    const fornecedor: Fornecedor = this.formulario.value;
    const observer: Observer<Fornecedor> = {
      next(_result): void {
        alert('Fornecedor salvo com sucesso.');
        this.listarFornecedores();
      },
      error(_error): void {
        alert('Erro ao salvar o Fornecedor!');
      },
      complete(): void {
      },
    };
    this.fornecedorService.addFornecedor(fornecedor).subscribe(observer);
  }

  listarFornecedores() {
    this.fornecedorService.getAllFornecedores().subscribe(fornecedores => {
      this.dataSource.data = fornecedores;
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
            alert('Fornecedor excluído com sucesso.');
            this.listarFornecedores();
          },
          error(_error): void {
            alert('Erro ao excluir o Fornecedor!');
          },
          complete(): void {
          },
        };

        this.fornecedorService.deleteFornecedor(row.id).subscribe(observer);
      }
    });
  }
}

export { Fornecedor };

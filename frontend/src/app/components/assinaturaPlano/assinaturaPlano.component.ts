import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observer } from 'rxjs';
import { AssinaturaPlano } from 'src/app/models/AssinaturaPlano'; 
import { AssinaturaPlanoService } from 'src/app/services/assinatura-plano.service';
import { DialogExcluirComponent } from '../dialog-excluir/dialog-excluir.component';

@Component({
  selector: 'app-assinatura-plano',
  templateUrl: './assinatura-plano.component.html',
  styleUrls: ['./assinatura-plano.component.css']
})
export class AssinaturaPlanoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  displayedColumns: string[] = ['id', 'nomeAssinante', 'planoId', 'dataInicio', 'dataFim']; 
  ELEMENT_DATA: AssinaturaPlano[] = [];
  dataSource = new MatTableDataSource<AssinaturaPlano>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private assinaturaPlanoService: AssinaturaPlanoService, 
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Lista de Assinaturas de Plano';

    this.formulario = new FormGroup({
      
      nomeAssinante: new FormControl(null),
      planoId: new FormControl(null),
      dataInicio: new FormControl(null),
      dataFim: new FormControl(null),
    });

    this.listarAssinaturas();
  }

  enviarFormulario(): void {
    const assinaturaPlano: AssinaturaPlano = this.formulario.value;
    const observer: Observer<AssinaturaPlano> = {
      next(_result): void {
        alert('Assinatura de Plano salva com sucesso.');
        this.listarAssinaturas();
      },
      error(_error): void {
        alert('Erro ao salvar a Assinatura de Plano!');
      },
      complete(): void {
      },
    };
    this.assinaturaPlanoService.cadastrar(assinaturaPlano).subscribe(observer);
  }

  listarAssinaturas() {
    this.assinaturaPlanoService.listar().subscribe(assinaturas => {
      this.dataSource.data = assinaturas;
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
            alert('Assinatura de Plano excluída com sucesso.');
            this.listarAssinaturas();
          },
          error(_error): void {
            alert('Erro ao excluir a Assinatura de Plano!');
          },
          complete(): void {
          },
        };

        this.assinaturaPlanoService.excluir(row.id).subscribe(observer);
      }
    });
  }
}

export { AssinaturaPlano };

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PagamentosService } from 'src/app/services/pagamentos.service';
import { Pagamento } from 'src/app/models/Pagamento';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css'],
})
export class PagamentosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private pagamentosService: PagamentosService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Pagamento';
    this.formulario = new FormGroup({
      id: new FormControl(null),
      nomecliente: new FormControl(null),
      valor: new FormControl(null),
      tipopagamento: new FormControl(null),
      datapagamento: new FormControl(null)
    });
  }
  enviarFormulario(): void {
    const pagamento: Pagamento = this.formulario.value;
    const observer: Observer<Pagamento> = {
      next(_result): void {
        alert('Pagamento salva com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void { },
    };
    if (pagamento.id && !isNaN(Number(pagamento.id))) {
      this.pagamentosService.atualizar(pagamento).subscribe(observer);
    } else {
      this.pagamentosService.cadastrar(pagamento).subscribe(observer);
    }
  }
}


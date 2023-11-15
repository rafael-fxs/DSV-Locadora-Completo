import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { Pedido } from 'src/app/models/Pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  formulario: any;
  tituloFormulario: string = 'Pedido';

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Pedido';
    this.formulario = new FormGroup({
      id: new FormControl(null),
      clienteId: new FormControl(null),
      nomeProduto: new FormControl(null),
      quantidade: new FormControl(null),
      valorTotal: new FormControl(null),
    });
  }
  enviarFormulario(): void {
    const pedido: Pedido = this.formulario.value;
    const observer: Observer<Pedido> = {
      next(_result): void {
        alert('Pedido salvo com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {},
    };
    if (pedido.id && !isNaN(Number(pedido.id))) {
      this.pedidoService.alterar(pedido).subscribe(observer);
    } else {
      this.pedidoService.cadastrar(pedido).subscribe(observer);
    }
  }
}

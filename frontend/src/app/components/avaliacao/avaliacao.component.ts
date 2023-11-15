import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { Avaliacao } from 'src/app/models/Avaliacao';
import { Cliente } from 'src/app/models/Cliente';
import { AvaliacaoService } from 'src/app/services/avaliacao.service';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  clientes: Array<Cliente> | undefined;

  constructor(
    private avaliacaoService : AvaliacaoService,
    private clientesService : ClientesService
    ) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Avaliacao';

    this.clientesService.listar().subscribe(clientes => {
      this.clientes = clientes;
      if (this.clientes && this.clientes.length > 0) {
        this.formulario.get('clienteId')?.setValue(this.clientes[0].id);
      }
    });

    this.formulario = new FormGroup({
      clienteId: new FormControl(null),
      dataCriacao: new FormControl(new Date()),
      classificacao: new FormControl(null),
      comentario: new FormControl(null),
      pedidoId: new FormControl(null),
    })
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

    this.avaliacaoService.cadastrar(avaliacao).subscribe(observer);
  }
}

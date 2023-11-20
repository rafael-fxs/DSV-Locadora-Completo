import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocacoesService } from 'src/app/services/locacoes.service';
import { Locacao } from 'src/app/models/Locacao';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-locacoes',
  templateUrl: 'src/app/components/locacoes/locacoes.component.html',
  styleUrls: ['src/app/components/locacoes/locacoes.component.css'],
})
export class LocacoesComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private locacoesService: LocacoesService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Locacao';
    this.formulario = new FormGroup({
      id: new FormControl(null),
      nomecliente: new FormControl(null),
      titulo: new FormControl(null),
      datalocacao: new FormControl(null)
    });
  }
  enviarFormulario(): void {
    const locacao: Locacao = this.formulario.value;
    const observer: Observer<Locacao> = {
      next(_result): void {
        alert('Locacao salva com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void { },
    };
    if (locacao.id && !isNaN(Number(locacao.id))) {
      this.locacoesService.atualizar(locacao).subscribe(observer);
    } else {
      this.locacoesService.cadastrar(locacao).subscribe(observer);
    }
  }
}


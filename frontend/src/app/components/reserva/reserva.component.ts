import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = 'Reserva';

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Reserva';
    this.formulario = new FormGroup({
      id: new FormControl(null),
      nomeCliente: new FormControl(null),
      dataReserva: new FormControl(null),
    });
  }
  enviarFormulario(): void {
    const reserva: Reserva = this.formulario.value;
    const observer: Observer<Reserva> = {
      next(_result): void {
        alert('Reserva salva com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {},
    };
    if (reserva.id && !isNaN(Number(reserva.id))) {
      this.reservaService.alterar(reserva).subscribe(observer);
    } else {
      this.reservaService.cadastrar(reserva).subscribe(observer);
    }
  }
}

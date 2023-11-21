import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { Funcionario } from 'src/app/models/Funcionario'; 
import { FuncionariosService } from  'src/app/services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private funcionariosService: FuncionariosService) {}

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Funcionário';
    this.formulario = new FormGroup({
      cpf: new FormControl(null),
      nome: new FormControl(null),
      cargo: new FormControl(null),
      salario: new FormControl(null),
      numerotelefone: new FormControl(null),
    });
  }

  enviarFormulario(): void {
    const funcionario: Funcionario = this.formulario.value;
    console.log(funcionario)
    this.funcionariosService.cadastrar(funcionario).subscribe(result => {
      alert('funcionario inserido com sucesso.');
      })
  
    };

    
    
  }


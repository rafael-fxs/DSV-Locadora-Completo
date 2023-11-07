import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { Marca } from 'src/app/models/Marca';
import { Modelo } from 'src/app/models/Modelo';
import { MarcasService } from 'src/app/services/marcas.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  marcas: Array<Marca> | undefined;

  constructor(private modelosService : ModelosService, private marcasService: MarcasService) { }

  ngOnInit(): void {
    
    this.tituloFormulario = 'Novo Modelo';

    this.marcasService.listar().subscribe(marcas => {
      this.marcas = marcas;
      if (this.marcas && this.marcas.length > 0) {
        this.formulario.get('marcaId')?.setValue(this.marcas[0].id);
      }
    });
    
    this.formulario = new FormGroup({
      id: new FormControl(null),
      marcaId: new FormControl(null),
      nome: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const modelo: Modelo = this.formulario.value;
    const observer: Observer<Modelo> = {
      next(_result): void {
        alert('Modelo salvo com sucesso.');
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    if (modelo.id && !isNaN(Number(modelo.id))) {
      this.modelosService.alterar(modelo).subscribe(observer);
    } else {
      this.modelosService.cadastrar(modelo).subscribe(observer);
    }
  }
}

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  //variables para guardar los datos de la api de categoria
  categorias: any;
  arrCategoria: any;

  constructor(private _categorias: CategoriasService) { }

  ngOnInit(): void {
      this.getCategorias();
  }

  //metodo para obtener todas las categorias
  //subscribe es un metodo que nos permite obtener los datos de la api y guardarlos en una variable

  getCategorias() {
    this._categorias.getCategorias().subscribe(
      (response) => {
        this.categorias = response;
        this.arrCategoria = this.categorias.categoriaResponse.categorias;
        console.log(this.arrCategoria);
      },
      (error) => {
        console.log(error);
      }
    );

    }
}

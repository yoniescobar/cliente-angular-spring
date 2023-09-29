import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar el modulo HTTP para hacer peticiones


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  //inyectamos el HttpClient que nos permite hacer peticiones http(libreria) get, post, put, delete
  constructor(private http: HttpClient) { }

  url: any = 'http://localhost:8080/api/v1/categorias';

  //metodo para obtener todas las categorias

  public getCategorias() {
    return this.http.get(this.url);
  }


}

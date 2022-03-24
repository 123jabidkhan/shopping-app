import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  // get products
  getProducts(){
    return this._http.get('https://fakestoreapi.com/products/');
  }

  getCategorys(){
    return this._http.get('https://fakestoreapi.com/products/categories');
  }

  getProductById(id:number){
    return this._http.get('https://fakestoreapi.com/products/'+id);
  }
}

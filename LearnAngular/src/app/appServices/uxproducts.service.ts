import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UxproductsService {
  url ='https://-----------------.firebaseio.com/products.json'; // change url of your api

  private headers = new HttpHeaders({'Content-Type' : 'application/json'})
  constructor(private http:HttpClient) { }

  saveProducts(products:any[]){
    // return this.http.post(this.url, products);
    return this.http.put(this.url, products, {headers : this.headers});
  }

  fetchProducts(){
    return this.http.get(this.url)
  }

  getDataTitle(){
    return this.http.get('https://---------.firebaseio.com/dataTitle.json') // change url of your api
  }
}

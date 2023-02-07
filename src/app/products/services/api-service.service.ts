import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

//to hold search key from header component
searchkey:string=''
  //getAllproducts
  getAllProducts() {
    return this.http.get('http://localhost:3000/all-products');
  }

  //viewProduct
  viewProduct(id: Number) {
    return this.http.get('http://localhost:3000/view-product/' + id);
  }
}

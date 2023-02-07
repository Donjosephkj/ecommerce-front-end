import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  quantity:any=1

  increment(){
    this.quantity+=1
  }
  decrement(){
    while(this.quantity>1){
      this.quantity=this.quantity-1
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    if(customerData.name === "" || customerData.address === ""){
      window.alert(`Porfavor correctamente introduce tus datos de envío.`);
    }else{
      window.alert(`Has realizado tu pedido correctamente. \nEl pedido ha sido enviado a la siguiente dirección: \n${customerData.address}`);

      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
    }
    
  }
}
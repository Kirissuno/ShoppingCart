import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('El producto ha sido compartido!');
  }

  onNotify() {
    window.alert('Se te notificará cuando el producto salga a la venta.');
  }
}


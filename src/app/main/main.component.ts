import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import productData from '../product.json';  

export interface Product {
  id: Number;  
  name: String;  
  specifications: {
		color: string;
		weight: string;
		storage: string;
		price: any;
    quantity: any;
	};
  picture: String;  
}  

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  constructor(
    private cartService: CartService
  ) { }

  products: Product[] = productData;  

  share(product: Product) {
    this.cartService.addToCart(product);
    window.alert('The product has been added to the cart!');
  }

}

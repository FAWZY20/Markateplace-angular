import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.css']
})
export class ProfilViewComponent {
  totalPrice: number = 0;

  items = this.cartService.getItems();


  delete(){
    this.cartService.clearCart();
    window.alert('All product is delete !');
  }

  get sumCart() {
    this.totalPrice = 0;
		this.items.forEach((product) => {
			this.totalPrice += product.specifications.price * product.specifications.quantity;
		})
    return this.totalPrice;
  }

  constructor(
    private cartService: CartService
  ) { }

}

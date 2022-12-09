import { Component } from '@angular/core';
import productData from '../product.json';  

interface Product {  
  id: Number;  
  name: String;  
  specifications: any;
  picture: String;  
}  

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  products: Product[] = productData;  

  share() {
    window.alert('The product has been shared!');
  }

}

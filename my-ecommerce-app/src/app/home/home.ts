import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   selectedProduct: any =null;

   products = [
     {id:1, name: 'Smart LED TV', price: 399, description: '4k OLED display with smart apps.', image: 'bi-tv' },
     {id:2, name: 'Noise Headphones', price: 129, description: 'Immersive sound with noise cancellation feature.', image: 'bi-headphones' },
     {id:3, name: 'Galaxy Phone', price: 599, description: 'Swift performance and top notch camera', image: 'bi-phone' },
     {id:4, name: 'Laptop Pro', price: 859, description: 'Lightweight laptop for work and productvity', image: 'bi-laptop' },
     {id:5, name: 'Smart Watch', price: 199, description: 'Track your fitness to stay heaalthy', image: 'bi-watch' },
     {id:6, name: 'Bluetooth Speaker', price: 89, description: 'Portable sound with deep bass and battery life', image: 'bi-boombox' }
   ];
   selectProduct(product: any): void{
     this.selectProduct = product;
   }
   closeDetails(): void {
    this.selectedProduct = null;
   }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products:any=[];
  grandTotal!:number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res)=>{
     this.products = res;
     console.log(this.products);

    })

   this.grandTotal = this.cartService.grandTotal()
  }

  removeCartItem(product:any){
    this.cartService.removeCartItem(product);
  }
  removeItems(){
    this.cartService.removAlleCartItem()
  }

  

}

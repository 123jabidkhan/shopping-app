import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';



ActivatedRoute
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  currentProduct!:any;
  constructor(private api:ApiService,private router:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params:any)=>{
      console.log(params.id);
      this.api.getProductById(params.id).subscribe((res)=>{
        this.currentProduct = res;
      })
    })


  }

  addToCart(product:any){
    this.cartService.addToCart(product);
  }

}

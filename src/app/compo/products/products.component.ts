import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
CartService
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:any[]=[]
  categorys:any=[]
  constructor(private api:ApiService,private cartService:CartService) { }

  ngOnInit(): void {

    this.api.getCategorys().subscribe((res)=>{
      this.categorys = res;
    })

    this.getAllProducts('all');

  }

  getAllProducts(cat:any){
    this.api.getProducts().subscribe((res:any)=>{
      
      if(cat === 'all'){
        this.products = res;
      }
      else if(cat === 'electronics'){
        this.products = res.filter((prod:any)=>{
          return prod.category === 'electronics';
        })
      }
      else if(cat === 'jewelery'){
        this.products = res.filter((prod:any)=>{
          return prod.category === cat;
        })
      }
      else if(cat === `men's clothing`){
        this.products = res.filter((prod:any)=>{
          return prod.category === cat;
        })
      }
      else if(cat === `women's clothing`){
        this.products = res.filter((prod:any)=>{
          return prod.category === cat;
        })
      }
      this.products.forEach((p)=>{
        Object.assign(p,{"quantity":1,"total":p.price})
      });

      // console.log(this.products);
    })

  }

  addProduct(product:any){
    this.cartService.addToCart(product)
  }

}

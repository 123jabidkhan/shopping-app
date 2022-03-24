import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[];
  public totalItems:any=0;
  
  public productList = new BehaviorSubject<any>([]);
  
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }
  
  setProducts(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    // console.log(this.cartItemList);
    this.totalItems = this.cartItemList.length
    this.grandTotal();
  }

  grandTotal() : number{
    let grandTotalPrice=0
    this.cartItemList.map((item:any) => {
      grandTotalPrice+=item.total
    });
    return grandTotalPrice
  }

  removeCartItem(product:any){
    this.cartItemList.map((item:any,index:number)=>{
      if(item.id === product.id){
        this.cartItemList.splice(index,1);
      }
      this.productList.next(this.cartItemList)
      this.grandTotal()
    })
  }

  removAlleCartItem(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList)
  }
}

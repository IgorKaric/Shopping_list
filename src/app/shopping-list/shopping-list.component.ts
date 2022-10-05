import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let products=JSON.parse(localStorage.getItem("allProducts"));
    if(products==null){
      localStorage.setItem("allProducts",JSON.stringify(this.allProducts));
    }
    this.allProducts=products;
  }

  deleteProduct(id:number):void{
    this.allProducts=this.allProducts.filter(prod=>prod.id !=id);
    localStorage.setItem("allProducts",JSON.stringify(this.allProducts));
  }


  allProducts:Product[]=[
    {
      id:1,
      name:"Product 1",
      type:"type 1",
      price:1000,
      description:"This is product 1"
    },
    {
      id:2,
      name:"Product 2",
      type:"type 2",
      price:2000,
      description:"This is product 2"
    },
    {
      id:3,
      name:"Product 3",
      type:"type 3",
      price:3000,
      description:"This is product 3"
    }
  ];
}

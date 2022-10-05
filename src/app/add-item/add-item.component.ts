import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.allProducts=JSON.parse(localStorage.getItem("allProducts"));
  }

  addNewItem():void{
    if(this.inputDescription==undefined || this.inputName==undefined || this.inputPrice==undefined || this.inputType==undefined){
      this.errorMessage="Please fill all fields";
      return;
    }
    let prod = new Product();
    prod.description=this.inputDescription;
    prod.name=this.inputName;
    prod.price=this.inputPrice;
    prod.type=this.inputType;
    let find=true;
    while(find){
      let newId=Math.round(Math.random()*100);
      find=false;
      for(let i=0;i<this.allProducts.length;i++){
        if(this.allProducts[i].id==newId){
          find=true;
        }
      }
      prod.id=newId;
    }
    this.allProducts.push(prod);
    localStorage.setItem("allProducts",JSON.stringify(this.allProducts));
    alert("New item has successfully added");
    this.router.navigate(['/']);
  }

  inputName:string;
  inputType:string;
  inputPrice:number;
  inputDescription:string;

  errorMessage:string;


  allTypes:string[]=["type 1", "type 2", "type 3"];
  allProducts:Product[]=[];
}

import { Component,OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productName:any=''                            
  products:any=[]
  isPresent:boolean=true
  searchKey:string=''
  constructor(private api:ApiServiceService){}

  ngOnInit(): void {
    this.api.getAllProducts().subscribe((result:any)=>{
      // result.products.forEach((element:any) => {
      //   // element.title.splice(10,element.title.length)
      //   this.productName= element.title.slice(0,15);
      //   console.log(this.productName);
        
      // });
      
      this.products=result.products
      console.log(this.products);
      this.searchKey=this.api.searchkey
      console.log(this.searchKey);
      
    })
  }
  

}
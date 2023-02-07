import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  productId: any = '';
  product:any=[]
  constructor(private route: ActivatedRoute, private api: ApiServiceService) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.productId = data['id'];
      console.log(this.productId);
      this.api.viewProduct(this.productId)
      .subscribe((result:any)=>{
        console.log(result.product);
        this.product=result.product
      })
    });
  }
}

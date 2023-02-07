import { Component } from '@angular/core';
import { ApiServiceService } from '../products/services/api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


constructor(private api:ApiServiceService){}


  search(event:any){
    let searchKey=event.target.value
    this.api.searchkey=searchKey
  }
}

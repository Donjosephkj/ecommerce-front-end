import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PogeNotFoundComponent } from './poge-not-found/poge-not-found.component';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
//redirect to all-products
{
  path:'',redirectTo:'products',pathMatch:'full'
},
{
  path:'**',component:PogeNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

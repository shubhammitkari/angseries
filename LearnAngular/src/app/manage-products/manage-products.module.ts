import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductsComponent } from './manage-products.component';
import { Routes, RouterModule } from '@angular/router';
import { UxproductsService } from '../appServices/uxproducts.service';
const routes: Routes =[
  {path:'', component:ManageProductsComponent},
]
@NgModule({
  declarations: [ManageProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers :[UxproductsService]
})
export class ManageProductsModule { 
  constructor(){
    // console.log('Manage Products Module loaded')
  }
}

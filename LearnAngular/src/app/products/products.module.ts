import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { RouterModule, Routes } from '@angular/router';
import { DesignUtilityModule } from '../appModules/design-utility.module';

const proRoutes: Routes =[
  {path:'', component:ProductsComponent,children:[
    {path:'mobile', component:MobileComponent},
    {path:'laptop', component:LaptopComponent},
    {path:'television', component:TelevisionComponent},
    {path:'washing-machine', component:WashingMachineComponent},
  ]},
]
@NgModule({
  declarations: [
    ProductsComponent,
    MobileComponent,
    LaptopComponent,
    TelevisionComponent,
    WashingMachineComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),
    DesignUtilityModule
  ]
})
export class ProductsModule { 
  constructor(){
    // console.log('Products Module loaded')
  }
}

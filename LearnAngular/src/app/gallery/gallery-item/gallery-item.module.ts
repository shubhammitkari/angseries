import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GalleryItemComponent } from './gallery-item.component';
const routes: Routes =[
  {path:'', component:GalleryItemComponent},
]
@NgModule({
  declarations: [
    GalleryItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GalleryItemModule {
  constructor(){
    console.log('GalleryItem Module loaded')
  }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManageUserComponent } from './manage-user.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes =[
  {path:'', component:ManageUserComponent},
]
@NgModule({
  declarations: [ManageUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers :[]
})
export class ManageUserModule { 
  constructor(){
    // console.log('Manage User Module loaded')
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CustomPreloadingService } from './appServices/custom-preloading.service';
import { SmartComponent } from './smart/smart.component';

const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component: LoginComponent},
    //() => import('./page/page.module').then(m=>m.PageModule)
    {path:'home', loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)},
    {path:'smart', component:SmartComponent},
    // {path:'about', loadChildren: ()=> import('./about/about.module').then(m=>m.AboutModule)},
    {path:'products', data :{preload :true}, loadChildren: ()=> import('./products/products.module').then(m=>m.ProductsModule)},
    {path:'services', data :{preload :true}, loadChildren: ()=> import('./services/services.module').then(m=>m.ServicesModule)},
    {path:'gallery', loadChildren: ()=> import('./gallery/gallery.module').then(m=>m.GalleryModule)},
    {path:'gallery/:id', loadChildren: ()=> import('./gallery/gallery-item/gallery-item.module').then(m=>m.GalleryItemModule)},
    {path:'contact', loadChildren: ()=> import('./contact/contact.module').then(m=>m.ContactModule)},
    {path:'manage-products', loadChildren: ()=> import('./manage-products/manage-products.module').then(m=>m.ManageProductsModule)},
    {path:'manage-user', loadChildren: ()=> import('./manage-user/manage-user.module').then(m=>m.ManageUserModule)},
    // {path:'**', component:PageNotFoundComponent}

    // De Routes
    {path:'de/', redirectTo:'login', pathMatch:'full'},
    {path:'de/login', component: LoginComponent},
    {path:'de/home', loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)},
    {path:'de/about', loadChildren: ()=> import('./about/about.module').then(m=>m.AboutModule)},
    {path:'de/products', data :{preload :true}, loadChildren: ()=> import('./products/products.module').then(m=>m.ProductsModule)},
    {path:'de/services', data :{preload :true}, loadChildren: ()=> import('./services/services.module').then(m=>m.ServicesModule)},
    {path:'de/gallery', loadChildren: ()=> import('./gallery/gallery.module').then(m=>m.GalleryModule)},
    {path:'de/gallery/:id', loadChildren: ()=> import('./gallery/gallery-item/gallery-item.module').then(m=>m.GalleryItemModule)},
    {path:'de/manage-user', loadChildren: ()=> import('./manage-user/manage-user.module').then(m=>m.ManageUserModule)},
    {path:'de/manage-products', loadChildren: ()=> import('./manage-products/manage-products.module').then(m=>m.ManageProductsModule)},
    {path:'de/contact', loadChildren: ()=> import('./contact/contact.module').then(m=>m.ContactModule)},
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(routes, {
            preloadingStrategy : CustomPreloadingService
        })
    ],
    exports :[
        RouterModule
    ]
})

export class AppRoutingModule{}
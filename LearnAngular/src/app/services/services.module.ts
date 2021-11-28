import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services.component';
import { UiUxComponent } from './ui-ux/ui-ux.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { VideoEditingComponent } from './video-editing/video-editing.component';
import { VfxAnimationComponent } from './vfx-animation/vfx-animation.component';
import { RouterModule, Routes } from '@angular/router';
import { DesignUtilityModule } from '../appModules/design-utility.module';

const serRoutes: Routes =[
    {path:'', component:ServicesComponent, children:[
        {path:'ui-ux', component:UiUxComponent},
        {path:'graphic-design', component:GraphicDesignComponent},
        {path:'video-editing', component:VideoEditingComponent},
        {path:'vfx-animation', component:VfxAnimationComponent},
    ]},
]
@NgModule({
    declarations :[
        ServicesComponent,
        UiUxComponent,
        GraphicDesignComponent,
        VideoEditingComponent,
        VfxAnimationComponent
    ],
    imports :[
        CommonModule,
        RouterModule.forChild(serRoutes),
        DesignUtilityModule
    ],

})

export class ServicesModule{
    constructor(){
        // console.log('Service Module loaded')
    }
}
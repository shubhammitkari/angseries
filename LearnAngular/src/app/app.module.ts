import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { GalleryItems } from './appModels/gallery';
import { MenuComponent } from './includes/menu/menu.component';
import { AppRoutingModule } from './app.routing.module';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { LangTranslateModule } from './appModules/lang-translate.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    LangTranslateModule,
    AppRoutingModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule  // for HttpClient use:
  ],
  providers: [GalleryItems],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
  }
}

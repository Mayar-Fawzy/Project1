import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
    BindingComponent,
      NavComponent,
      NotFoundComponent,
      
      MobileComponent,
       WebComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

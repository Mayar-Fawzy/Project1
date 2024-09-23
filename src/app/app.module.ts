import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { ShowApiDataComponent } from './show-api-data/show-api-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
    BindingComponent,
      NavComponent,
      NotFoundComponent,
      
      MobileComponent,
       WebComponent,
       SliderComponent,
       ShowApiDataComponent   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

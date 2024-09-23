import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';


const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'binding',component:BindingComponent ,
    children:[
        { path:'web',component:WebComponent},
      { path:'mobile',component:MobileComponent}
    ]
  },
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

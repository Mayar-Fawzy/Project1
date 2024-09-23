import { Component } from '@angular/core';
import { ServiesService } from '../servies.service';
import { Users } from '../users';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
 
})
export class BindingComponent {
  nAmE:string="mayar";
  imgurl='../../assets/logo/logo\ 01.png';
  Hello(){alert("hello");}
  Helloo(eventInfo:MouseEvent){
    alert(eventInfo.target)
  }
  productPrice=10
  mainStyle='background-color:pink; color:yellow;'
    SecondStyle='font-size:150px; color:blue;'
    Friendes:string[]=["mayar","mona","laila","malk"];

    Users:Users[]=[];
    constructor(_userService:ServiesService ){
      this.Users=_userService.users; 
    }

    
     CheckAge:number=18;
    //  Genarics
     GenaricFun<T>(param: T): T {
      return param;
    } 
}

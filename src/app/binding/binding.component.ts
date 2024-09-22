import { Component } from '@angular/core';
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

    constructor(){}

     users:Users[]=[
      {namee:'mayar' , age : 21 , gender : 'female'},
      {namee:'laila' , age : 4 , gender : 'female'},
      {namee:'ahmed' , age : 25 , gender : 'male'},
      {namee:'mohamed' , age : 21 , gender : 'male'},
      {namee:'anwaar' , age : 25 , gender : 'female'},
     ]
     CheckAge:number=18;
}

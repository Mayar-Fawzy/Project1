import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ServiesService {
//  SharedData
users:Users[]=[
  {namee:'mayar' , age : 21 , gender : 'female'},
  {namee:'laila' , age : 4 , gender : 'female'},
  {namee:'ahmed' , age : 25 , gender : 'male'},
  {namee:'mohamed' , age : 21 , gender : 'male'},
  {namee:'anwaar' , age : 25 , gender : 'female'},
 ]
  constructor() { }
}

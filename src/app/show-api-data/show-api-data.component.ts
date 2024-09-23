import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-show-api-data',
  templateUrl: './show-api-data.component.html',
  styleUrls: ['./show-api-data.component.css']
})
export class ShowApiDataComponent {
  myresults:any[]=[];
  myerror:string='';
  subscription=new Subscription();
  constructor(private _servies:NewsService) {} 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this._servies.getServies().subscribe(
      //next 
      (Response)=>{
      this.myresults=Response.results;
    },
    //error"status_message"
    (error)=>{
      
      this.myerror= error.status_message;
      console.log( error.status_message);
      
    },
    //complete دايما شغاله
    ()=>{console.log("complete");}
  )
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //stop calling api when i leave a component (lazy execution)

    this.subscription.unsubscribe;
  }
}

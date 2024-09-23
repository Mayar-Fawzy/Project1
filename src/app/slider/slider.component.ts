import { Component, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  // from parent to child (bnding -> slider)
  @Input() slider:string='';
   // from  child to parent (slider ->bnding )
  @Output() sliderTask=new EventEmitter<string>();
  setSliderTask(){
    this.sliderTask.emit('learn Angular');
  }
 
}

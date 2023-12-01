import { Component } from '@angular/core';

@Component({
  selector: 'app-default-image',
  templateUrl: './default-image.component.html',
  styleUrls: ['./default-image.component.css']
})
export class DefaultImageComponent {
  
  imageName: string = '';
   
  /*
  setName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.imageName = input.value;
    console.log(this.defaultImageName); 
    console.log(this.imageName);
  }*/
}

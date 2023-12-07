import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-obs',
  templateUrl: './image-obs.component.html',
  styleUrls: ['./image-obs.component.css']
})
export class ImageObsComponent implements OnInit {
  myObservable = new Observable<any>();

  images = [
    'cyrine.jpg',
    'salim.jpg',
    'may.jpg',
    'omar.jpg',
    'seddik.jpg'
  ];

  currentImage = '';
  Image_name = '';

  constructor() {}

  ngOnInit(): void {
    this.myObservable = new Observable((observer) => {
      let i =0 ;
      setInterval(() => {
        observer.next(this.images[i]);
        if (i < this.images.length - 1) {
          i++;
        } else {
          i = 0;
        }
      }, 1000); 
    });

    this.myObservable.subscribe(
      (result) => {
        this.currentImage = result;
        this.Image_name=result.split('.')[0];
      }
    );
  }
}

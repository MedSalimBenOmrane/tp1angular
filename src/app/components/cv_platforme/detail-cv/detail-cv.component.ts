import {Component, Input} from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
  @Input() personne:Personne;
  constructor() {
  this.personne=new Personne();
  }

}

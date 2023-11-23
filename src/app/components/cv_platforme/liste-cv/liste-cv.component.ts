import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent {
 @Input() personnes:Personne [];
  @Output() selectedPersonne=new EventEmitter();
 constructor() {
   this.personnes=[]
 }
 selectPersonne(selectedPersonne:any){
   this.selectedPersonne.emit(
     selectedPersonne
   )
 }
}

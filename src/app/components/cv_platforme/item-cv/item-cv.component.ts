import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit{
  @Input()  personne:Personne;
  @Output() selectedPersonne=new EventEmitter();
  constructor() {
    this.personne=new Personne();
  }

  ngOnInit(): void {
    }
  selectPersonne(){
    this.selectedPersonne.emit(
      this.personne
    );
  }
}

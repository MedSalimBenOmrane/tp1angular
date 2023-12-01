import {Component, OnInit} from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit
{
  personnes:Personne [];
  SelectedPesonne!:Personne;
  constructor() {
    this.personnes=[
      new Personne(1,'Ben Omrane','Med Salim',22,'salim.jpg', 88888888 ,'WEB DEV'),
      new Personne(2,'Zribi','cyrine',22,'cyrine.jpg',11111111,'WEB DEV'),
      new Personne(3,'Hammami ','Omar',23,'omar.jpg',22222222,'WEB DEV'),
      new Personne(4,'Ben Jeddou','May',22,'may.jpg',33333333,'WEB DEV'),
      new Personne(4,'Turki','Med Seddik',22,'seddik.jpg',44444444,'WEB DEV'),

    ];
  }

  ngOnInit(): void {
  }

  selectPersonne(personne:Personne){
  this.SelectedPesonne=personne;
  }


}

import {Component, OnInit} from '@angular/core';
import {Personne} from "../Model/Personne";
import { CvServiceService } from '../service/cv-service.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit
{
  personnes:Personne [];
  SelectedPesonne!:Personne;
  constructor( private cv_service:CvServiceService) {
    this.personnes=[];
 

  
  }

  ngOnInit(): void { 
    this.personnes=this.cv_service.getPersonnesCv();
    /*
     this.cv_service.getPersonnesCv().subscribe(
    (response) => {
      this.personnes = response;
   
    },
  );
  */
  }

  selectPersonne(personne:Personne){
  this.SelectedPesonne=personne;
  }


}

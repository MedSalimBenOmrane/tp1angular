import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  private personnes: Personne [];
  private personne!:Personne;
  constructor() {

    this.personnes =[
      new Personne(1,'Ben Omrane','Med Salim',22,'salim.jpg', 88888888 ,'WEB DEV'),
      new Personne(2,'Zribi','cyrine',22,'cyrine.jpg',11111111,'WEB DEV'),
      new Personne(3,'Hammami ','Omar',23,'omar.jpg',22222222,'WEB DEV'),
      new Personne(4,'Ben Jeddou','May',22,'may.jpg',33333333,'WEB DEV'),
      new Personne(5,'Turki','Med Seddik',22,'seddik.jpg',44444444,'WEB DEV'),
  
    ];
   }

   getPersonnesCv():Personne[]
   {

    return this.personnes ;

   }
  getPersonneById(id: number): Personne  {

      return this.personnes.find(p => p.id == id) || new Personne(); // Utilisez "||" pour renvoyer une nouvelle Personne si aucune personne n'est trouvée.
    
   
}


  deletePersonne(id: number): void {
    this.personnes = this.personnes.filter(p => p.id !== id);
  }


}



import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  link = 'https://apilb.tridevs.net/api/personnes';
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


/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personne } from '../Model/Personne';


@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  private apiUrl = 'https://apilb.tridevs.net/api/personnes';

  private personnesSubject: BehaviorSubject<Personne[]> = new BehaviorSubject<Personne[]>([]);
  personnes$: Observable<Personne[]> = this.personnesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchAndStorePersonnes();
  }

  getPersonnesCv(): Observable<Personne[]> {
    return this.personnes$;
  }

  private fetchAndStorePersonnes() {
    this.getPersonnesFromAPI().subscribe(
      (data) => {
        this.personnesSubject.next(data);
      },
      (error) => {
        console.error('Erreur lors de la récupération des personnes', error);
        this.personnesSubject.next([
      new Personne(1,'Ben Omrane','Med Salim',22,'salim.jpg', 88888888 ,'WEB DEV'),
      new Personne(2,'Zribi','cyrine',22,'cyrine.jpg',11111111,'WEB DEV'),
      new Personne(3,'Hammami ','Omar',23,'omar.jpg',22222222,'WEB DEV'),
      new Personne(4,'Ben Jeddou','May',22,'may.jpg',33333333,'WEB DEV'),
      new Personne(5,'Turki','Med Seddik',22,'seddik.jpg',44444444,'WEB DEV'),
  
    ]);
      }
    );
  }

  getPersonnesFromAPI(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiUrl);
  }

  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.apiUrl}/${id}`);
  }

  deletePersonne(id: number): void {
    const newPersonnes = this.personnesSubject.value.filter(
      (personne) => personne.id !== id
    );
    this.personnesSubject.next(newPersonnes);
  }
}
*/




import { Component } from '@angular/core';
import { Personne } from '../Model/Personne';
import { CvServiceService } from '../service/cv-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheservService } from '../service/embaucheserv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  personne!: Personne;
  constructor(
    private cvService: CvServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private embaucheservService:EmbaucheservService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params['id']);
       if (params['id']) {
          this.personne = this.cvService.getPersonneById(params['id']);
          console.log(this.cvService.getPersonneById(1));
        } else {
          console.error("ID is undefined");
        }
      }
    );
  }


  
  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id);
    this.embaucheservService.debaucher(this.personne);
    const link = ['cv'];
    this.router.navigate(link);
    this.toastr.error(`${this.personne.name} supprimé(e) de la liste des CV`, 'cv supprimé');
    this.toastr.error(`${this.personne.name} supprimé(e) de la liste des personnes embauchées`, 'cv supprimé');
      
   
      
}
}

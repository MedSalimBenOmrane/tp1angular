import { Component } from '@angular/core';
import { Personne } from '../Model/Personne';

import { EmbaucheservService } from '../service/embaucheserv.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  personnesEm!: Personne [];
  constructor(
  private toastr: ToastrService,private embaucheService: EmbaucheservService) {
   }

  ngOnInit() {
    this.personnesEm = this.embaucheService.getEmbauchees();
  }
  deleteEmbauche(personne:Personne):void{
    this.embaucheService.debaucher(personne);
    this.toastr.info(`${personne.name} supprimé(e) de la liste des embauches`, 'cv supprimé');
  }
}

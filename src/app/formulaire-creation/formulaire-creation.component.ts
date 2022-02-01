import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChampionService } from '../services/champion.service';

@Component({
  selector: 'app-formulaire-creation',
  templateUrl: './formulaire-creation.component.html',
  styleUrls: ['./formulaire-creation.component.scss']
})
export class FormulaireCreationComponent implements OnInit {

  formulaire: FormGroup;

  constructor(private championService : ChampionService) {
    this.formulaire = new FormGroup({
      title: new FormControl(),
      key: new FormControl (),
      name: new FormControl(),
      active: new FormControl()
    })
   }

  ngOnInit(): void {
  }


  /**
   * Méthode permettant l'enregistrement d'un nouveau champion
   */
  save(): void {
    this.championService.create(this.formulaire.value).subscribe({
      next: () => null,
      error: err => console.error(err),
      complete: () => console.log("champion ajouté")
    })
  }

}

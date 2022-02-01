import { Component, OnInit } from '@angular/core';
import { Champion } from '../models/champion';
import { ChampionService } from '../services/champion.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss']
})
export class ChampionListComponent implements OnInit {

  championsList : Champion[] = [];


  constructor(private championService : ChampionService) { }
/**
 * Méthode getAll () appelée à la création du composant
 */
  ngOnInit(): void {
    this.getAll();
  }
  /**
   * Fonction permettant d'afficher tous les champions
   */
   getAll() : void {
    this.championService.getAll().subscribe({
      next: data => this.championsList = data,
      error: err => console.error(err),
      complete: () => console.log("récupération de tous les champions")

    })
  }
   /**
   * Fonction permettant de supprimer un champion
   */
    delete(champion: Champion) {
      this.championService.delete(champion.id).subscribe({
        next: () => null,
        error: err => console.error(err),
        complete: () => {
          console.log(`suppression champion ${champion.name}`);
          this.getAll()
        }
      })
    }


}

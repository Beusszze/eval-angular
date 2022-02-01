import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Champion } from 'src/app/models/champion';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.page.html',
  styleUrls: ['./champions.page.scss']
})
export class ChampionsPage implements OnInit {

  @Input() id!: number;
  @Input() newActive!: boolean;
  @Input() name!: string;
  @Input() title!: string;
  @Input() key!: string;


  @Output() championModified: EventEmitter<Champion> = new EventEmitter();



  constructor(private championService : ChampionService) { }

  ngOnInit(): void {
  }

 
  saveChampion(): void {
    let modifiedChampion: Champion = 
      {id: this.id, active: this.newActive, 
      name: this.name, title: this.title, 
      key: this.key }
    this.championModified.emit(modifiedChampion);
  }


}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent {


  futbolista:any={


  };
  constructor(private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService
    ) {

    this.activatedRoute.params.subscribe(params=>{
      console.log(params['id']);
      this.futbolista=this._heroesService.getFutbolista(params['id']);
    });
   }

  ngOnInit(): void {
  }

}

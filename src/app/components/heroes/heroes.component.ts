import { Component, OnInit } from '@angular/core';
import { HeroesService, Futbolista } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  futbolistas:Futbolista[]=[];
  constructor(private _heroesService: HeroesService,
    private _router:Router) {


   }

  ngOnInit(): void {

    this.futbolistas=this._heroesService.getFutbolistas();
    // console.log(this.futbolistas);
  }

  verJugador(idx:number){
    console.log(idx);
    this._router.navigate(['/heroe',idx]);
  }

  verJugadorFiltrado(idx:number){
    console.log(idx);
    this._router.navigate(['/buscador',idx]);
  }

}

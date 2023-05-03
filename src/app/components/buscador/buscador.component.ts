import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',

})
export class BuscadorComponent implements OnInit {

futbolistas:any[]=[]
termino:string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService:HeroesService,  private _router:Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino=params['termino'];
      this.futbolistas=this._heroesService.buscarFutbolista(params ['termino']);
      console.log([this.futbolistas]);
    })
  }
  verJugador(idx:number){
    console.log(idx);
    this._router.navigate(['/heroe',idx]);
  }

}

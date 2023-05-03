
//a-service el atajo o ag-s
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private futbolistas:Futbolista[] = [
    {
    Id:1,
    Nombre: "Diego Armando Maradona",
    Bio: "Diego Armando Maradona nació en Buenos Aires (Argentina) el 30 de octubre de 1960. Es considerado junto a Pelé, el mejor jugador de la Historia del fútbol Aunque nació en Lanús, se crio en Villa Fiorito, donde le empezaron a apodar el Pelusa. Desde muy pequeño su vida estuvo unida a un balón. Con nueve años entró en el equipo que dirigía su padre, lo que creó muchos recelos al ser bastante más pequeño que el resto de sus compañeros Nunca fue un buen estudiante, prefería pasar horas haciendo malabares con el balón. Tal vez esta afición, que convirtió en una forma de vivir, le hizo fichar por Argentinos Juniors, debutando con 15 años en 1ª División en 1976. Durante los años siguientes, Maradona fue el máximo goleador de su equipo. Además, ganó el Campeonato del Mundo Juvenil de 1979.En 1981, ya más consolidado como un gran jugador, firmó por Boca Juniors. Ese mismo año consiguió su primer campeonato liguero.. ",
    img: "assets/img/diego.png",
    Debut: "1976-20-10",
    Nacionalidad:"Argentina"
  },
  {
    Id:2,
    Nombre: "Lionel Andrés Messi",
    Bio: "Lionel Andrés Messi; Rosario, Santa Fe, 1987) Futbolista argentino. Poseedor de una habilidad técnica excepcional, una endiablada velocidad y una inventiva inagotable, desde que llegó de la mano de sus padres al F.C. Barcelona, con 13 años de edad, realizó una carrera vertiginosa por las diferentes categorías hasta el primer equipo, en el que debutó con apenas 16 años en un partido amistoso ante el Oporto. Con 18 años le llegó su consagración internacional: formó parte de la selección argentina, campeona en el Mundial Juvenil Sub-20 de Holanda, disputado en 2005..",
    img: "assets/img/leo.png",
    Debut: "2003-11-16",
    Nacionalidad:"Argentina"
  },
  {
    Id:3,
    Nombre: "Ronaldo",
    Bio: "Ronaldo Luiz Nazario de Lima, el ‘Fenómeno’, puso fin en 2011 a una de las carreras más exitosas en la historia del fútbol tras 18 años de vida profesional en los que marcó 414 goles, ganó dos títulos mundiales, fue el mayor anotador en Copas del Mundo y se consagró tres veces como el mejor del planeta en la elección de la Fifa..",
    img: "assets/img/ronaldo.png",
    Debut: "1993-09-17",
    Nacionalidad: "Brasil"
  },
  {
    Id:4,
    Nombre: "Ronaldinho",
    Bio: "Ronaldo de Assis Moreira; Brasil, 1980) Futbolista brasileño. Ronaldinho Gaucho no es solo un jugador de fútbol, es el ídolo de millones de aficionados que ven en él la encarnación del “jogo bonito” brasileño, del fútbol hecho con arte que ilusiona a grandes y pequeños..",
    img: "assets/img/dinho.png",
    Debut: "1998-03-04",
    Nacionalidad:"Brasil"
  }];

  futbolistasFiltro:Futbolista[]= [];
  constructor() {
    console.log("Servicio listo para ser utilizado");
   }



   // Esta funcion retorna FUTBOLISTAS en forma de arreglo
   getFutbolistas():Futbolista[]{
     return this.futbolistas;
   }

   getFutbolista(idx:number){
     return this.futbolistas[idx];
   }

   buscarFutbolista(termino:string):Futbolista[]{

    let futbolistaArray:Futbolista[] = [];
    termino=termino.toLowerCase();

    for (let futbolista of this.futbolistas){
      let nombre= futbolista.Nombre.toLowerCase();
      if(nombre.indexOf(termino)>=0){
        futbolistaArray.push(futbolista);
      }
    }

    this.futbolistasFiltro=futbolistaArray;
    return futbolistaArray;
   }

   getFutbolistaFiltrado(idx:string){
     return this.futbolistasFiltro[idx];
   }
}


export interface Futbolista{
  Id:number;
  Nombre: string;
  Bio: string;
  img: string;
  Debut: string;
  Nacionalidad:string;
}


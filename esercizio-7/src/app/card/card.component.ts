
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

pokemon = [
  { nome : 'TEPIG', immagine:'https://media.pokemoncentral.it/wiki/3/37/Homem0498.png',control:false, descrizione:'', zona :'Pokémon iniziale ricevibile dalla Prof.ssa Aralia a Soffiolieve', primaabilita : 'aiutofuoco', abilitaspeciale : 'grassospesso', tipo :'fuoco' , debolezze : ' acqua, roccia, terra' },
  { nome : 'OSHAWOTT', immagine:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png', control:false, descrizione:'', zona :'Pokémon iniziale ricevibile dalla Prof.ssa Aralia a Soffiolieve', primaabilita : 'acquaiuto', abilitaspeciale : 'guscioscudo', tipo :'acqua' , debolezze : 'erba, elettro'},
  { nome : 'SNIVY', immagine:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png', control:false, descrizione:'', zona :'Pokémon iniziale ricevibile dalla Prof.ssa Aralia a Soffiolieve', primaabilita : 'erbaiuto', abilitaspeciale : 'inversione', tipo :'erba' , debolezze : 'fuoco, ghiaccio, veleno, volante, coleottero'},
]
bottone(pokemon:{nome:string}){
  if(pokemon.nome=="TEPIG"){
    this.pokemon[0].control=true
  }else if(pokemon.nome=="OSHAWOTT"){
    this.pokemon[1].control=true
  }else if(pokemon.nome=="SNIVY"){
    this.pokemon[2].control=true
  }
}
}


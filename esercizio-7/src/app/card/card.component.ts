
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
  { nome : 'TEPIG', immagine:'https://media.pokemoncentral.it/wiki/3/37/Homem0498.png',control:false, evoluzioni :'PIGNITE (lvl 17) EMBOAR (lvl 36)  ', zona :'Pokémon iniziale ricevibile dalla Prof.ssa Aralia a Soffiolieve', primaabilita : 'aiutofuoco', abilitaspeciale : 'grassospesso', tipo :'fuoco' , debolezze : ' acqua, roccia, terra', nome1 : 'PIGNITE', immagine1 :'https://media.pokemoncentral.it/wiki/6/60/Homem0499.png',control1 :false, evoluzioni1 :'EMBOAR (lvl 36)  ', zona1 :'evolvendo TEPIG', primaabilita1 : 'aiutofuoco', abilitaspeciale1 : 'grassospesso', tipo1 :'fuoco, lotta' , debolezze1 : ' acqua, psico, terra, volante', nome2 : 'EMBOAR', immagine2 :'https://media.pokemoncentral.it/wiki/c/cb/Homem0500.png',control2 :false, evoluzioni2 :' nessuna evoluzione', zona2 :'evolvendo PIGNITE', primaabilita2 : 'aiutofuoco', abilitaspeciale2 : 'temerarietà', tipo2 :'fuoco, lotta' , debolezze2 : ' acqua, psico, terra, volante' },
  { nome : 'OSHAWOTT', immagine:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png', control:false, evoluzioni :'DEWOTT (lvl 17) SAMUROTT (lvl 36)  ', zona :'Pokémon iniziale ricevibile dalla Prof.ssa Aralia a Soffiolieve', primaabilita : 'acquaiuto', abilitaspeciale : 'guscioscudo', tipo :'acqua' , debolezze : 'erba, elettro',nome1 : 'DEWOTT', immagine1:'https://media.pokemoncentral.it/wiki/thumb/6/61/Artwork0502_NB.png/1024px-Artwork0502_NB.png', control1 :false, evoluzioni1 :'SAMUROTT (lvl 36)  ', zona1 :'evolvendo OSHAWOTT', primaabilita1 : 'acquaiuto', abilitaspeciale1 : 'guscioscudo', tipo1 :'acqua' , debolezze1 : 'erba, elettro',nome2 : 'SAMUROTT', immagine2:'https://media.pokemoncentral.it/wiki/thumb/7/78/Artwork0503_NB.png/300px-Artwork0503_NB.png', control2:false, evoluzioni2 :'nessuna evoluzione', zona2 :'evolvendo DEWOTT', primaabilita2 : 'acquaiuto', abilitaspeciale2 : 'guscioscudo', tipo2 :'acqua' , debolezze2 : 'erba, elettro'},
  { nome : 'SNIVY', immagine:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png', control:false,evoluzioni :'SERVINE (lvl 17) SERPERIOR (lvl 36)  ' , zona :'Pokémon iniziale ricevibile dalla Prof.ssa Aralia a Soffiolieve', primaabilita : 'erbaiuto', abilitaspeciale : 'inversione', tipo :'erba' , debolezze : 'fuoco, ghiaccio, veleno, volante, coleottero',nome1 : 'SERVINE', immagine1:'https://media.pokemoncentral.it/wiki/thumb/2/2f/Artwork0496_NB.png/300px-Artwork0496_NB.png', control1 :false, evoluzioni1 :'SERPERIOR (lvl 36)  ', zona1 :'evolvendo SNIVY', primaabilita1 : 'erbaiuto', abilitaspeciale1 : 'inversione', tipo1 :'erba' , debolezze1 : 'coleot, fuoco, ghiaccio, veleno, volante',nome2 : 'SERPERIOR', immagine2:'https://media.pokemoncentral.it/wiki/thumb/5/5c/Artwork0497_NB.png/300px-Artwork0497_NB.png', control2:false, evoluzioni2 :'nessuna evoluzione', zona2 :'evolvendo SERVINE', primaabilita2 : 'erbaiuto', abilitaspeciale2 : 'inversione', tipo2 :'erba' , debolezze2 : 'coleot, fuoco, ghiaccio, veleno, volante'},
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
home(){
  this.pokemon[0].control=false
  this.pokemon[1].control=false
  this.pokemon[2].control=false
}
}


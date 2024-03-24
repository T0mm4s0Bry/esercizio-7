
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
  { nome : 'Tepig', immagine:'https://media.pokemoncentral.it/wiki/3/37/Homem0498.png'},
  { nome : 'Oshawott', immagine:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png'},
  { nome : 'Snivy', immagine:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png'},
]
}

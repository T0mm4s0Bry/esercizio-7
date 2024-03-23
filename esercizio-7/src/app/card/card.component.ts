
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
  {posizione : '1', nickname : 'soaz', team:'fnatic', immagine:'https://media.trackingthepros.com/profile/p145.png', ruolo:'top lane', eta:'30', nazionalita:'fr', link:'https://liquipedia.net/leagueoflegends/SOAZ'},
  
]
}

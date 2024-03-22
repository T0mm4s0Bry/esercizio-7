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
  premi(index:number){
    var Player = this.player[index];
    window.open(Player.link);
  }
player = [
  {posizione : '1', nickname : 'soaz', team:'fnatic', immagine:'https://media.trackingthepros.com/profile/p145.png', ruolo:'top lane', eta:'30', nazionalita:'fr', link:'https://liquipedia.net/leagueoflegends/SOAZ'},
  {posizione : '2', nickname : 'jankos', team:'h2k', immagine:'../../assets/TJankos_2024_Split_1.webp', ruolo:'jungle', eta:'28', nazionalita:'pl', link:'https://liquipedia.net/leagueoflegends/Jankos'},
  {posizione : '3', nickname : 'powerofevil', team:'misfits gaming', immagine:'../../assets/PowerOfEvil_2022_Split_2.webp', ruolo:'mid lane', eta:'26', nazionalita:'de', link:'https://liquipedia.net/leagueoflegends/PowerOfEvil'},
  {posizione : '4', nickname : 'rekkles', team:'fnatic', immagine:'../../assets/rekkles.webp', ruolo:'adc', eta:'27', nazionalita:'se', link:'https://liquipedia.net/leagueoflegends/Rekkles'},
  {posizione : '5', nickname : 'ignar', team:'misfits gaming', immagine:'../../assets/ignar.webp', ruolo:'support', eta:'27', nazionalita:'kr', link:'https://liquipedia.net/leagueoflegends/IgNar'},
  {posizione : '6', nickname : 'expect', team:'G2 esport', immagine:'../../assets/expert.webp', ruolo:'top lane', eta:'28', nazionalita:'kr', link:'https://liquipedia.net/leagueoflegends/Expect'},
  {posizione : '7', nickname : 'trick', team:'G2 esport', immagine:'../../assets/trickz.webp', ruolo:'jungle', eta:'28', nazionalita:'kr', link:'https://liquipedia.net/leagueoflegends/Trick'},
  {posizione : '8', nickname : 'perkz', team:'G2 esport', immagine:'../../assets/perckz.jpg', ruolo:'mid lane', eta:'25', nazionalita:'hr', link:'https://liquipedia.net/leagueoflegends/Perkz'},
  {posizione : '9', nickname : 'zven', team:'G2 esport', immagine:'../../assets/zven.webp', ruolo:'adc', eta:'26', nazionalita:'dk', link:'https://liquipedia.net/leagueoflegends/Zven'},
  {posizione : '10', nickname : 'mithy', team:'G2 esport', immagine:'../../assets/mithy.webp', ruolo:'support', eta:'29', nazionalita:'es', link:'https://liquipedia.net/leagueoflegends/Mithy'},
]
}

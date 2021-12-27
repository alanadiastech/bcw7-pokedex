import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})

export class PokemonCardComponent{

  @Input()
  pokemon:string

  @Input()
  numero!:number

  constructor(){
    this.pokemon = ""
  }

  pegarImgPok(){
    const numeroFormatado = this.leadingZero(this.numero)
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }

  leadingZero(str:string | number):string{
    let x = String(str)
    while (x.length < 3){
      x = '0' + x
    }
    return x
  }

}

import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
 
  characters: any = [];
  
  constructor(private service: CharactersService) { }

  async ngOnInit() {
    const personajes: any = await this.service.getAll();
    this.characters = personajes;
    console.log(this.characters); 
  }
  searchCharacter: string = '';
  filterCharacter: Array<{name: string, char_id: number, img: string}> = [];

  headlerInput(e:any) {
    this.searchCharacter = e.target.value;
  }
  button(){
    this.filterCharacter = this.characters.filter((character : any) => character.name === this.searchCharacter)
  }

  

}

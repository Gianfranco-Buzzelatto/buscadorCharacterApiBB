import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  characters: any = [];
  
  constructor(private service: CharactersService) { }

  async ngOnInit() {
    const personajes: any = await this.service.getAll();
    this.characters = personajes;
    console.log(this.characters); 
  }
  searchCharacter: string = '';
  searchResults: Array<{name: string, char_id: number, img: string}> = [];
  

}

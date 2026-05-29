import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonType } from '../../models/pokemon-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.html',
  styleUrls: ['./type-list.css'],
  imports: [CommonModule]
})
export class TypeListComponent implements OnInit {
  types: PokemonType[] = [];
  selectedTypes = ['fire', 'water', 'rock'];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.types = this.selectedTypes.map(name => ({ name, url: '' }));
  }

  goToList(type: string) {
    this.router.navigate(['/pokemon', type]);
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.html',
  styleUrls: ['./pokemon-detail.css'],
  imports: [CommonModule]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name') || '';
    this.pokemonService.getPokemon(name).subscribe(data => {
      this.pokemon = data;
    });
  }

  goBack() {
    this.router.navigate(['/types']);
  }
}
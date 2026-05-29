import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.css'],
  imports: [CommonModule]
})
export class PokemonListComponent implements OnInit {
  typeName: string = '';
  pokemonList: { name: string; url: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.typeName = this.route.snapshot.paramMap.get('type') || '';
    this.pokemonService.getTypeDetail(this.typeName).subscribe(data => {
      this.pokemonList = data.pokemon.slice(0, 20).map(p => p.pokemon);
    });
  }

  goToDetail(name: string) {
    this.router.navigate(['/detail', name]);
  }

  goBack() {
    this.router.navigate(['/types']);
  }
}
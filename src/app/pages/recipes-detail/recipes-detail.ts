import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-detail',
  imports: [],
  templateUrl: './recipes-detail.html',
  styleUrl: './recipes-detail.css',
})
export class RecipesDetail {

  private route = inject(ActivatedRoute);

  recipesList: any[] = RECIPES_LIST_DATA.recipes;

  recipe: any;

  constructor() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.recipe = this.recipesList.find((recipe) => recipe.id === id);

  }

}
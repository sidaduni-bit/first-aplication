import {
  Component,
  inject
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import {
  RECIPES_LIST_DATA
} from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-detail-v2',
  imports: [],
  templateUrl: './recipes-detail-v2.html',
  styleUrl: './recipes-detail-v2.css',
})
export class RecipesDetailV2 {

  private readonly route =
    inject(ActivatedRoute);

  recipesList =
    RECIPES_LIST_DATA;

  filterRecipesList(): any[] {

    const name =
      this.route.snapshot.queryParamMap
        .get('name')
        ?.toLowerCase()
        .trim() ?? '';

    const difficulty =
      this.route.snapshot.queryParamMap
        .get('difficulty')
        ?.toLowerCase()
        .trim() ?? '';

    if (name) {

      return this.recipesList.recipes.filter(
        (x: any) =>
          x.name
            .toLowerCase()
            .includes(name)
      );

    }

    if (difficulty) {

      return this.recipesList.recipes.filter(
        (x: any) =>
          x.difficulty
            .toLowerCase()
            .includes(difficulty)
      );

    }

    return [];

  }

}
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test.',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.media-allrecipes.com%2Fimages%2F56589.png&imgrefurl=https%3A%2F%2Fwww.allrecipes.com%2Frecipes%2F&docid=jSLnQsNp7iBGKM&tbnid=VhaiNYg1RVI4RM%3A&vet=10ahUKEwiEqpH_rZPgAhVKc98KHcQCCVEQMwhqKAEwAQ..i&w=300&h=300&bih=938&biw=1920&q=recipe&ved=0ahUKEwiEqpH_rZPgAhVKc98KHcQCCVEQMwhqKAEwAQ&iact=mrc&uact=8'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}

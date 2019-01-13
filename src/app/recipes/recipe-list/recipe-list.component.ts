import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  // tslint:disable-next-line:max-line-length
  new Recipe('Test Recipe', 'This is Testing Recipe',
  'https://images.pexels.com/photos/748027/pexels-photo-748027.jpeg?cs=srgb&dl=cooking-fish-peanuts-748027.jpg&fm=jpg'),
  new Recipe('Test Recipe', 'This is Testing Recipe',
  'https://images.pexels.com/photos/748027/pexels-photo-748027.jpeg?cs=srgb&dl=cooking-fish-peanuts-748027.jpg&fm=jpg'),
];
  constructor() { }

  ngOnInit() {
  }

}

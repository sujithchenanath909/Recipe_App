import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe('burger','description of burger','https://www.thespruceeats.com/thmb/O4xB3FoR7B6ovTpcENFLtQyIuAU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg'),
    new Recipe('burger','description of burger','https://www.thespruceeats.com/thmb/O4xB3FoR7B6ovTpcENFLtQyIuAU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddReceipe(){
    this.recipes.push(new Recipe('burger','description of burger','https://www.thespruceeats.com/thmb/O4xB3FoR7B6ovTpcENFLtQyIuAU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg') );
  }
}

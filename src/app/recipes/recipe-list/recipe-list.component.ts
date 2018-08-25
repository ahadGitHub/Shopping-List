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
        new Recipe('Rib Eye', 'Sample Recipe for the VIPs', 'https://static01.nyt.com/images/2018/02/14/dining/14Kitchen1/merlin_133154163_ac1cede9-18ea-4811-a543-0a7fa6855b66-articleLarge.jpg'),
        new Recipe('Lasagna', 'Lunch Menu, Chef menu for today', 'https://www.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-a-2000.jpg'),
        new Recipe('Meat Ball', 'Freshly Made, available only for lunch', 'https://therecipecritic.com/wp-content/uploads/2016/08/swedishmeatballs2-650x975.jpg'),
        new Recipe('Chicken Soup', 'Specially made, limited amount', 'https://www.eatwell101.com/wp-content/uploads/2018/04/Instant-Pot-Creamy-Chicken-Soup-Recipe.jpg')
    ];

    constructor() { }

    ngOnInit() {
    }

}

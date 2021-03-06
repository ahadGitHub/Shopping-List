import { Component, OnInit } from '@angular/core';

import { Ingredient } from './../common/ingredient.model';


@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Oregano', 3),
        new Ingredient('Black Peper', 5)
    ];

    constructor() { }

    ngOnInit() {
    }

}

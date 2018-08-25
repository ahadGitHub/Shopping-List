import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('amount') recipeAmount: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    addRecipe(name: HTMLInputElement) {
        console.log(name.value);
        console.log(this.recipeAmount.nativeElement.value);

        /*
         * We can lso change the html value throgh this
         * but it's not recommended to do it this way
         */
        this.recipeAmount.nativeElement.value = 11;
    }

}

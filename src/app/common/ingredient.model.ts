
export class Ingredient {
    /*
     * Instead of creating this properties and constructor
     * we can declare the properties in the constructor as public and
     * behind the scene, it will have the same functionality as below code
     */
    // public name: string;
    // public amount: number;

    // constructor(name: string, amount: number) {
    //     this.name = name;
    //     this.amount = amount;
    // }

    constructor(public name: string, public amount: number) {
        
    }
}

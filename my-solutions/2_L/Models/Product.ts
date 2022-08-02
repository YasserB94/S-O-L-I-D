import Discount from "./Discount";
import { iDiscount } from "./Interfaces/iDiscount";
//TypeChecking use Baseclass to ensure discount will always be a discount
//When using the interface, the class that owns the instance will only be able to access the methods defined by the interface
export default class Product {
    private _name : string;
    private _price : number;
    private _discount : iDiscount;

    constructor(name: string, price: number, discount: iDiscount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }

    get name(): string {
        return this._name;
    }

    get discount(): Discount {
        return this._discount;
    }

    get originalPrice(): number {
        return this._price;
    }

    //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    calculatePrice() : number {
        return this._discount.apply(this._price);
    }

    showCalculation() : string {
        return this._discount.showCalculation(this._price);
    }
}
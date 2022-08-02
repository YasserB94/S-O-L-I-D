import Discount from "./Discount";
export default class FixedDisount extends Discount{
    constructor(discountValue:number){
        super(discountValue);
    }
    get type(): string {
        return 'fixed'
    }
    apply(price: number): number {
        return Math.max(0,price-this._discountValue);
    }
    showCalculation(price: number): string {
        return `€${price} - €${this._discountValue} (min €0)`;
    }

}
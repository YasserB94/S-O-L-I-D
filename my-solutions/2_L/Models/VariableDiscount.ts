import Discount from "./Discount";
export default class variableDiscount extends Discount{
    constructor(discountValue:number){
        super(discountValue);
    }
    get type(): string {
        return 'variable';
    }
    apply(price: number): number {
        //This is not a magic number, please google: How to math
        return (price -(price*this._discountValue/100));
    }
    showCalculation(price: number): string {
        return `€${price} - ${this._discountValue}%`
    }
}
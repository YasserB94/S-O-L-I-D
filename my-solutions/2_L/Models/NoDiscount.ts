import Discount from "./Discount";
export default class NoDiscount extends Discount{
    constructor(){
        super(0);
    }
    get type(): string {
        return 'none';
    }
    apply(price: number): number {
        return price;
    }
    showCalculation(price: number): string {
        return 'No discount';
    }
}
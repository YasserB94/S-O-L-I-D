export interface iDiscount{
    get type() : string;
    apply(price :number):number;
    showCalculation(price:number):string;
}
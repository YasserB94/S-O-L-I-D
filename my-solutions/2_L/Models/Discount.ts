import { iDiscount as DicountInterface } from "./Interfaces/iDiscount";
export default class Discount implements DicountInterface{
    protected _discountValue:number;
    constructor(discountValue:number){
        if(discountValue<0){
            console.error(`Error!`)
            console.error(`Class: Discount`)
            console.error(`Method: Constructor`)
            console.error(`Passed in value: ${discountValue}`)
            console.error(`The Discountvalue can not be negative`)
            throw new Error(`Invalid discountValue:${discountValue}`)
        }
        this._discountValue = discountValue;
    }
    get type(): string {
        console.error('Error!')
        console.error('Class: Discount')
        console.error('Method: getter for type')
        console.error('This is a base class. Please use a child')
        throw new Error("Invalid Discount Type - Class:Discount - Method:ShowCalculation");
    }
    showCalculation(price: number): string {
        console.error('Error!')
        console.error('Class: Discount')
        console.error('Method: showCalculation')
        console.error(`Passed in value: ${price}`)
        console.error('This is a base class. Please use a child')
        throw new Error("Invalid Discount Type - Class:Discount - Method:ShowCalculation");
    }
    apply(price: number): number {
        console.error('Error!')
        console.error('Class: Discount')
        console.error('Method: Apply')
        console.error(`Passed in value: ${price}`)
        console.error('This is a base class. Please use a child')
        throw new Error("Invalid Discount Type - Class:Discount - Method:Apply")
    }
}
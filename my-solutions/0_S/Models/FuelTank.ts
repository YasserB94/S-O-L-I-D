export default class FuelTank{
    private _fuel:number;
    
    private readonly CAPACITY:number;
    
    constructor(capacity:number){
        this._fuel = 0;
        this.CAPACITY = capacity;
    }
    addFuel(amount:number):void{
        if((this._fuel+amount)>this.CAPACITY){
            this._fuel = this.CAPACITY;
            return;
        };
        this._fuel+=amount;
    }
    removeFuel(amount:number):void{
        if(this._fuel-amount<0){
            this._fuel = 0
            return;
        }
        this._fuel -= amount;
    }
    get amountOfFuel(){
        return this._fuel;
    }
}
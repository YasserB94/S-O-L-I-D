export default class Odometer{
    private _count:number;
    constructor(){
        this._count = 0;
    }
    
    public get count() : number {
        return this._count;
    }
    
    addDistance(amount:number){
        this._count+=amount;
    }
    reset(){
        this._count = 0;
    }

}
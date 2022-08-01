export default class Engine {
    private _status:boolean;
    constructor(){
        this._status = false;
    }
    public turnOn(){
        this._status = true;
    }
    public turnOff(){
        this._status = false;
    }
    
    public get status() : boolean {
        return this._status
    }
    
}
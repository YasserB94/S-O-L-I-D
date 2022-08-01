import  Engine  from './Engine';
import  FuelTank  from './FuelTank';
import  MusicPlayer  from './MusicPlayer';
import Odometer from './Odometer';

export class Car{
    private readonly MILES_PER_FUEL:number;

    private _engine:Engine;
    private _fuelTank:FuelTank;
    private _musicPlayer:MusicPlayer;
    private _odoMeter:Odometer;


    constructor(MAXIMUM_FUEL_TANK_CAPACITY:number){
        this.MILES_PER_FUEL = 10;        
        this.init(MAXIMUM_FUEL_TANK_CAPACITY);
    }
    private init(MAXIMUM_FUEL_TANK_CAPACITY:number):void{
        this._engine = new Engine();
        this._fuelTank = new FuelTank(MAXIMUM_FUEL_TANK_CAPACITY);
        this._musicPlayer = new MusicPlayer();
        this._odoMeter = new Odometer();
    }
    public get engine() : Engine {
        return this._engine;
    }
    
    public get odoMeter() : Odometer {
        return this._odoMeter;
    }
    
    public get fueltank() : FuelTank {
        return this._fuelTank;
    }
    
    public get musicPlayer() : MusicPlayer {
        return this._musicPlayer;
    }
    public drive(){
        if(this._engine.status ===false || this._fuelTank.amountOfFuel<=0) return;
        this._fuelTank.removeFuel(1);
        this._odoMeter.addDistance(this.MILES_PER_FUEL);
    }
} 
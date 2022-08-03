import { Oven } from "./Oven";
export default class Restaurant {
    private _name: string;
    private _oven;
    constructor(name: string, oven: Oven) {
        this._name = name;
        this._oven = oven;
    }
    public Cook(item: string) {
        this._oven.turnOn();
        this._oven.bake(item);
        this._oven.turnOff();
    }
}
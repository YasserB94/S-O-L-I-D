import { Type, Cry } from "./Interfaces";
export default class Animal implements Type,Cry{
    protected readonly _name:string;
    protected readonly _type:string ;
    protected readonly _cry:string;
    constructor(name?:string,type?:string,cry?:string){
        const DEFAULTS = {
            TYPE:'No Animal Type was Specified',
            NAME:'My Creator was a sad lonely man in an office. Not creative enough to name me',
            CRY:'I just wanna tell you how I am feeling, Gotta make you understand!'
        };
        this._name = name ? name : DEFAULTS.NAME;
        this._type = type ? type : DEFAULTS.TYPE;
        this._cry = cry ? cry : DEFAULTS.CRY;
    }
    get name(): string {
        return this._name;
    }
    get type():string{
        return this._type;
    }
    get cry():string{
        return this._cry;
    }

}




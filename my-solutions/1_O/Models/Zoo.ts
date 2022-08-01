import Animal from './Animal';
export default class Zoo{
    private _animals :Array<Animal> = new Array <Animal>();
    
    addAnimal(animal:Animal){
        this._animals.push(animal);
    }
    get animals():Array<Animal>{
        return this._animals;
    }
}

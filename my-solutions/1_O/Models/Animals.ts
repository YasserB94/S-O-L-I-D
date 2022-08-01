import Animal from "./Animal";
export class Dog extends Animal{
    constructor(name:string){
        const INFO = {
            TYPE:'Dog',
            CRY:'Woof Woof'
        }
        super(name,INFO.TYPE,INFO.CRY);
    }
}
export class Cat extends Animal{
    constructor(name:string){
        const INFO = {
            TYPE:'Cat',
            CRY:'Miauw'
        }
        super(name,INFO.TYPE,INFO.CRY);
        
    }
}
export class Parrot extends Animal{
    constructor(name:string){
        const INFO = {
            TYPE:'Parrot',
            CRY:'Arrrrrrrr!!!! I am a parrotirate!'
        }
        super(name,INFO.TYPE,INFO.CRY);
    }
}
import * as Animal from './Models/Animals';
import Zoo from './Models/Zoo';
const TARGET = <HTMLElement>document.querySelector('#target');
const ZOO = new Zoo;
console.log(`Javascript is magic${Animal}` + Animal)
console.log(Animal)
ZOO.addAnimal(new Animal['Cat']('Puss'));
ZOO.addAnimal(new Animal['Dog']('Wuff'));
ZOO.addAnimal(new Animal['Parrot']('Mr Arrrrrr!'))
ZOO.animals.forEach((animal)=>{
    const animalSummary = document.createElement('p');
    animalSummary.innerText = `${animal.name}: ${animal.cry} I am a ${animal.type} ${animal.cry}`;
    TARGET.appendChild(animalSummary)
})

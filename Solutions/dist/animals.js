"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classifyAnimal(animal) {
    if ('barks' in animal) {
        animal.barks;
        console.log('This is a dog');
        return;
    }
    if ('hasTail' in animal) {
        animal.meows;
        console.log('This is a cat');
        return;
    }
    if ('coos' in animal) {
        animal.coos;
        console.log('This is a pigeon');
        return;
    }
}
const fido = {
    name: 'Fido',
    color: 'brown',
    barks: true
};
classifyAnimal(fido);
const whiskers = {
    name: 'Whiskers',
    color: 'orange',
    meows: true,
    hasTail: true
};
classifyAnimal(whiskers);
const skyrat = {
    name: 'Greg',
    color: 'gray',
    canFly: true,
    coos: true
};
classifyAnimal(skyrat);

// main.js
import { Animal } from './support.js';

function myCallback(bufferStatus) {
    //console.log('Callback received bufferStatus:', bufferStatus);
    console.log(`${this.name}  is ${this.age} years old and make sound ${bufferStatus.sound} and is ${bufferStatus.color} in  color`)
}

const animal = new Animal('Dog', 2, myCallback);
animal.config(); // This will call the myCallback function with the bufferStatus object

const animal2 = new Animal('Goat',3,myCallback);
animal2.config();
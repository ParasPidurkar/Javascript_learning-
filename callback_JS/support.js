export class Animal {
    // Properties should be defined within the constructor
    constructor(name, age, handler) {
        this.name = name;
        this.age = age;
        this.handler = handler;
        this.color = null;
        this.sound = null;
    }

    config() {
        const bufferStatus = {
            color: "black",
            sound: "bleh"
        };

        // The closing brace for the if statement was misplaced
        if (typeof this.handler === 'function') {
            this.handler(bufferStatus);
        }
    }
}

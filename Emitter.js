class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }

    off(event, listener) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(l => l !== listener);
    }
}

// Usage
const emitter = new EventEmitter();
const greet = (name) => console.log(`Hello, ${name}!`);

emitter.on('greet', greet);
emitter.emit('greet', 'Alice'); // Output: Hello, Alice!
emitter.off('greet', greet);
emitter.emit('greet', 'Bob'); // No output
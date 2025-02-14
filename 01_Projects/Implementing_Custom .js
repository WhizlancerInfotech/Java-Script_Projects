class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) this.events[event].forEach(listener => listener(...args));
    }
}

const emitter = new EventEmitter();
emitter.on("message", msg => console.log(`Received: ${msg}`));
emitter.emit("message", "Hello World!");

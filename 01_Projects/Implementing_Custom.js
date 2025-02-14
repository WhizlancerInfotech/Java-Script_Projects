class MyPromise {
    constructor(executor) {
        this.resolveHandlers = [];
        this.rejectHandlers = [];
        this.state = "pending";
        this.value = undefined;

        const resolve = (value) => {
            if (this.state !== "pending") return;
            this.state = "fulfilled";
            this.value = value;
            this.resolveHandlers.forEach(handler => handler(value));
        };

        const reject = (reason) => {
            if (this.state !== "pending") return;
            this.state = "rejected";
            this.value = reason;
            this.rejectHandlers.forEach(handler => handler(reason));
        };

        executor(resolve, reject);
    }

    then(onFulfilled) {
        return new MyPromise((resolve) => {
            this.resolveHandlers.push((value) => resolve(onFulfilled(value)));
        });
    }
}

new MyPromise(resolve => setTimeout(() => resolve("Success!"), 1000))
    .then(console.log);

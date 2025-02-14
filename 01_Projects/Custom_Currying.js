function curry(fn) {
    return function curried(...args) {
        return args.length >= fn.length ? fn(...args) : (...next) => curried(...args, ...next);
    };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); 

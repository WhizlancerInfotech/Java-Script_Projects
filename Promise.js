function allSettled(promises) {
    return Promise.all(promises.map(p => 
        Promise.resolve(p)
            .then(value => ({ status: 'fulfilled', value }))
            .catch(reason => ({ status: 'rejected', reason }))
    ));
}

// Usage
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error'));
const promise3 = Promise.resolve(42);

allSettled([promise1, promise2, promise3]).then(results => {
    console.log(results);
    // Output: 
    // [
    //   { status: 'fulfilled', value: 3 },
    //   { status: 'rejected', reason: 'error' },
    //   { status: 'fulfilled', value: 42 }
    // ]
});
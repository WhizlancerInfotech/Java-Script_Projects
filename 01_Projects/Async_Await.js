let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
});
myPromise.then(message => console.log(message));

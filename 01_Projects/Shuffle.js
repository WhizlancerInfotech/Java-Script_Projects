function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

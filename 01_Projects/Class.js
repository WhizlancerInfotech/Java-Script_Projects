class Car {
    constructor(brand) {
        this.brand = brand;
    }
    showBrand() {
        console.log(`Car brand: ${this.brand}`);
    }
}
let myCar = new Car("Tesla");
myCar.showBrand();

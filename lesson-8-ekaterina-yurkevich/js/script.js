// 1)

let cars = [
    { model: "Jeep", price: 50000, carMileage: 40000 },
    { model: "Audi", price: 46000, carMileage: 80000 },
    { model: "BMW", price: 32000, carMileage: 340000 },
    { model: "Kia", price: 67500, carMileage: 70000 },
    { model: "Geely", price: 22000, carMileage: 49000 },
]

function getAveragePrice(arr) {
    let i = 0;
    let sum = arr
        .filter(({ carMileage }) => carMileage < 50000)
        .reduce((acc, { price }) => {
            i++;
            return acc + price;
        }, 0);
    return sum / i;
};

function getCarNamesSmallCarMileage(arr) {
    return arr
        .filter(({ carMileage }) => carMileage < 50000)
        .map(({ model }) => model);
};

console.log('Cредняя стоимость автомобилей с пробегом меньше 50000:', getAveragePrice(cars));
console.log('Марки автомобилей с пробегом меньше 50000:', getCarNamesSmallCarMileage(cars));
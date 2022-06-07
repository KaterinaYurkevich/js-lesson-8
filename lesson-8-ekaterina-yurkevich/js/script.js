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

//2)

let student = {
    name: "Your name",
    age: "Your age",
    id: 1,
}

const studentEntries = Object.entries(student);
console.log(studentEntries);

const studentMap = new Map(studentEntries);
console.log(studentMap);

studentMap
    .set("surname", "Your surname")
    .set("nationality", "Your nationality");
console.log(studentMap);

console.log(studentMap.has("name"));

// 3)

for (let key of studentMap.keys()) {
    console.log(key);
};

for (let value of studentMap.values()) {
    console.log(value);
};

for (let entry of studentMap.entries()) {
    console.log(entry);
};

// 4)

let amount = {
    apple: 440,
    burger: 316,
    juice: 1120,
};

let newAmount = Object.fromEntries(
    Object.entries(amount).map(([key, value]) => [key, value / 2])
);

console.log(newAmount);

// 5)

function getSumProducts(obj) {
    let sum = 0;
    for (let value of Object.values(obj)) {
        sum += value;
    }
    return sum;
}

console.log(getSumProducts(newAmount));

// 6)

function getUnique(arr) {
    return [...new Set(arr)]
}

let arr = ["One", "Two", "One", "Three", "Four", "One", "One", "Five", "Six", "One"];

console.log(getUnique(arr));

// 7)

const weather = {
    "coord": {
        "lon": -122.08,
        "lat": 37.39
    },
    "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
    }],
    "base": "stations",
    "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "clouds": {
        "all": 1
    },
    "dt": 1560350645,
    "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
}

let anotherWeather = JSON.parse(JSON.stringify(weather));

console.log(anotherWeather);
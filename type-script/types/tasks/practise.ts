interface car{
    brand:string;
    milage:number
}

type RequiredCar=Required<car>;

const car1:RequiredCar={brand:"abc"};

console.log(car1);


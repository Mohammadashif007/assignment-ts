function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true) {
        return input.toUpperCase();
    } else if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}



function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    const filteredItem = items.filter((item) => item.rating >= 4);
    return filteredItem;
}



function concatenateArrays<T>(...array: T[][]): T[] {
    return ([]as T[]).concat(...array);
}



class Vehicle {
    private _make: string;
    private _year: number;
    constructor(make: string, year: number) {
        this._make = make;
        this._year = year;
    }
    getInfo() {
        console.log(`Make: ${this._make}, year: ${this._year}`);
    }
}

class Car extends Vehicle {
    private _model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this._model = model;
    }
    getModel() {
        console.log(`Model: ${this._model}`);
    }
}



function processValue(value: number | string): number {
    if (typeof value === "string") {
        return value.length;
    } else if (typeof value === "number") {
        return value * 2;
    }
    return 0;
}



interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (!products.length) {
        return null;
    }
    const hightPrice = products.sort(
        (
            a: { name: string; price: number },
            b: { name: string; price: number }
        ) => b.price - a.price
    );
    const product = hightPrice[0];
    return product;
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function getDayType(day: Day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}




async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}



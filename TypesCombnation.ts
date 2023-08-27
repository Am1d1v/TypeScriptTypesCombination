
// Conditional Type

const x = 10;
const isNegative = x >= 0 ? "no" : "yes";

interface StringRecord {
    [key: string]: string;
}

interface DateRecord {
    [key: string]: Date;
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord;
type Object1 = MyRecord<string>;
type Object2 = MyRecord<number>;

const obj1: Object1 = {
    a: '123',
    b: '234'
}

const obj2: Object2 = {
    a: new Date(1990, 5, 5)
}














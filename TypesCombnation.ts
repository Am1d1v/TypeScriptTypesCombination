
// Conditional Type

/*
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
*/

// Extends

/*
type answer1 = 60 extends number ? true : false; // true
type answer2 = number extends 64 ? true : false; // false
type answer3 = string[] extends any ? true : false; // true
type answer4 = string[] extends any[] ? true : false; // true
type answer5 = never extends any ? true : false; // true
type answer6 = any extends any ? true : false; // true
*/

// Infer

function fromPair(pair: [string, string]){
    const [key, value] = pair;

    return {
        [key]: value
    }
}

const myPair1 = ['myKey1', 'myValue1'];
const pairRes =  fromPair(myPair1 as [string, string]);
console.log(pairRes);









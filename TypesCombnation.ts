
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

/*
function fromPair(pair: [string, string]){
    const [key, value] = pair;

    return {
        [key]: value
    }
}

type FirstArg<T> = T extends (first: infer First, ...arg: unknown[]) => any ? First : never;

const myPair1: FirstArg<typeof fromPair> = ['myKey1', 'myValue1'];
const pairRes =  fromPair(myPair1);
console.log(pairRes);
*/

// Mapped Types

/*
type PCBrand = {
    name: string;
    createdAt: Date;
}

type Brands = 'Brand1' | 'Brand2' | 'Brand3';

type myPCRecord = {
    [BrandKey in Brands]?: PCBrand;
}

const brandRecord: myPCRecord = {
    Brand1: {
        name: 'SomeBrandName',
        createdAt: new Date()
    }
}

function PCCatalog(pcCatalog: myPCRecord){
    console.log(pcCatalog.Brand1?.name);
}
PCCatalog(brandRecord);


type partOfWindow = {
    [Key in 'document' | 'screen']?: Window[Key];
}

const p: partOfWindow = {
    screen: window.screen
}
console.log(p);
*/

// Utilites

// Exclude
/*
type T0 = Exclude <"a" | "b" | "c", "a">;
type T1 = Exclude <"a" | "b" | "c", "a" | "b">;

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type NumericStatus = Exclude <Status, string>;
type TextStatus = Exclude <Status, number>;
*/

// Extract
/*
type T00 = Extract <"a" | "b" | "c", "a">;
type T11 = Extract <"a" | "b" | "c", "a" | "b">;

type ExtractStatusText = Extract<Status, string>;
type ExtractStatusNumber = Extract<Status, number>;



interface Person {
    name: string;
    surname: string;
    age: number;
    country: string;
    hobbies: [];
}

type PersonNames = Extract <keyof Person, "name" | "surname">;
*/

// NonNullable
/*
type Type000 = NonNullable<string| number | undefined>;
type Type001 = NonNullable<string[]| null | undefined>;
*/

// ReadOnly
/*
interface ToDo {
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
}
type ToDoReadOnly = Readonly <ToDo>;
*/

// Partial
/*
type ToDoPartial = Partial <ToDo>;
function updateToDo(todo: ToDo, fieldsToUpdate: ToDoPartial){

}
*/

// Required
//type RequiredToDo = Required <ToDo>;

// Record

/*
type Names = Record <string, number>;

type SomeBrands = 'Brand1' | 'Brand2' | 'Brand3';
type BrandNames = Record <string, number>;

const myBrands: BrandNames = {
    Brand1: 100
}
*/

// Pick

/*
interface ToDo {
    title: string;
    description?: string;
    completed: boolean;
}
type BooleanToDo = Pick <ToDo, 'title' | 'completed'>;

const todo1:BooleanToDo = {
    title: 'ToDoList',
    completed: true
}
*/

// Omit

/*
type OmitToDo = Omit <ToDo, 'description' | 'completed'>;

const todo2: OmitToDo = {
    title: 'OmitToDoList'
}
*/

// Parameters

/*
function f1(arg: {a: number, b: string}){
     console.log(arg.a + arg.b);
};

type t0 = ReturnType <typeof f1>;
type t1 = Parameters <typeof f1>;
*/

// Indexed TS

/*
interface DataModel  {
    id: string;
    title: string;
    elements: {
        title: string,
        description: string,
    };
    footer: {
        description: string;
    }
    body: [
        {
            title: string,
            content: {}
        }
    ]
}

type T0 = DataModel['elements']['description'];
*/

/*
type someTuple = [number, string, boolean, ...string[]];
const arr: someTuple = [1, 'abc', true, 'a', 'b', 'c'];

type T1 = someTuple[0];
*/

/*
const sizes = ['small', 'medium', 'large'] as const;

type T2 = typeof sizes[number];
type T3 = typeof sizes[0];
*/

// Template Literals

type Side = 'top' | 'right' | 'bottom' | 'left';

type Margin = `margin-${Side}`;
type Margin2 = `margin-${Capitalize<Side>}`;

type Padding = `padding-${Side}`;


type Direction = 'up' | 'right' | 'down' | 'left';
type Position = 'top' | 'bottom';
type Entry = 'in' | 'out';
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`;


interface Car {
    brand: string;
    model: string;
    year: number;
}

type CarFactory = {
    [k in keyof Car as `set${Capitalize<k>}`]: (car: Car, value: Car[k]) => void;
}











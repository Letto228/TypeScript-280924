// // let variable: type = ...;

// import { Size } from "./3-type-alias";

// // let variable: type;
// // variable = ...;

// // ------------------------------------------

// // // boolean

// // // let isTrue: boolean = true;

// // let isTrue: boolean;

// // isTrue = true;
// // isTrue = false;

// // isTrue = '';
// // isTrue = 123;
// // isTrue = {};

// // // number

// // let num: number = 123;
// // let float: number = 12.56;
// // let binary: number = 0b101;

// // // bigint

// // let bigNumber: bigint = 100n;

// // bigNumber = 123;
// // num = 100n;

// // // string

// // let str: string = 'string, Hello';

// // // null | undefined

// // let nullVar: null = null;

// // nullVar = undefined;

// // let undefinedVar: undefined = undefined;

// // undefinedVar = null;

// // // symbol

// // ------------------------------------------

// // object

// let objectVar: {readonly a: string; b?: number; c: {d: boolean}} = {
//     a: 'string',
//     c: {
//         d: true
//     },
// };

// objectVar.a = 'Egor';

// // array

// // let arrayVar: Array<string> = [];
// // let arrayVar: string[] = ['123', 'egor'];
// // let arrayVar: string[] = [];
// // let arrayVar: (string[])[] = [['str'], []];
// let arrayVar: (string | number | boolean)[] = ['str', 123, true];

// type ArrayVar = (typeof arrayVar)[number];

// // let arrayVar: ((string[])[])[] = [[['str']], [['test']]];
// // let arrayVar: string[][][] = [[['str']], [['test']]];

// // кортеж

// let tuple: [string, number, {a: boolean}] = ['str', 123, {a: true}];

// type Tuple = (typeof tuple)[0];

// // function

// // function calculate(a: number, b: number): number {
// //     return a + b;
// // }

// const calculate = (a?: number, b: number = 0, ...otherFunctionParams: [string, number, 'start' | 'end']): number => {
//     return (a || 0) + b;
// }

// const result: number = calculate(123, 321, '', 123, 'start');

// function invoke(callback: (a: number, b: number) => number): void {
//     callback(321, 123);
// }

// invoke(calculate);

// // ---------------------------------------------

// // any

// let anyVar: any;

// anyVar = {};
// anyVar = 123;
// anyVar = '123';

// // unknown

// let unknownVar: unknown = {a: 'string'};

// // unknownVar = 123;
// unknownVar.a;

// let numberVar: number = unknownVar;

// // never TODO

// // Литеральные типы

// // let fontWeight: 'bold' = 'bold';
// // let fontWeight: 500 = 500;

// // union type

// let numberOrStringVar: number | string = 'true';

// function getProperty(
//     obj: {a: string; b: string} | {b: boolean; d: string},
// ) {
//     obj.b;
// }

// const structureFirst: {a: string; b: string} = {a: '', b: ''};
// const structureSecond: {b: boolean; d: string} = {b: true, d: ''};

// getProperty(structureSecond);

// let fontWeight: 500 | 600 | 700 | 'bold' = 500;

// fontWeight = 500;
// fontWeight = 600;
// fontWeight = 'bold';
// fontWeight = 700;

// // function calculateButtonSize(size: 's' | 'm' | 'l') {}
// function calculateButtonSize(size: Size) {}

// calculateButtonSize('s');

// // intersection type

// let testObjVar: {a: string} & {b: string} = {
//     a: '',
//     b: '',
// }

// // {title: string; duration: number} & {seasonCount: number} = {title: string; duration: number; seasonCount: number}

// // let testObjVar: {a: string, b: number} & {b: string | number} = {
// //     a: '',
// //     b: 123,
// // }

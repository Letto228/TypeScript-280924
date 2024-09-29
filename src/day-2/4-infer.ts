// const data: number | string = 123;

// let example = data;

// example = 321;

// // example = 'srt'

// // ------------------------------

// function calculate(a: number) {
//     if (a === 3) {
//         return true;
//     }

//     if (a === 4) {
//         return false;
//     }

//     if (a > 0) {
//         return;
//     }

//     return a;
// }

// //----------------------------------------

// type Film = {
//     title: string;
//     duration: number;
// }

// function getProperty<Entity extends object, Key extends keyof Entity = keyof Entity>(
//     entity: Entity,
//     key: Key,
// ): Entity[Key] {
//     return entity[key];
// }

// getProperty({title: 'str', duration: 123}, 'duration');

// // ---------------------------------------

// // BAD
// // function call(callback: (...args: any[]) => any, ...args: any[]): any {
// //     return callback(...args);
// // }

// function call<Arguments extends unknown[], ReturnType>(
//     callback: (...args: Arguments) => ReturnType,
//     ...args: Arguments
// ): ReturnType {
//     return callback(...args);
// }

// const callback = (a: boolean, b: string, c: number): {a: number, c: {d: string}} => {
//     return {a: 123, c: {d: ''}}
// }

// const result = call(callback, true, 'str', 123);

// // ---------------------------------------

// type ReturnTypeCustom<Func extends (...args: any[]) => unknown> = 
//     Func extends (...args: any[]) => infer ReturnType
//         ? ReturnType
//         : never

// type CallbackReturnType = ReturnTypeCustom<typeof callback>
// type CalculateReturnType = ReturnTypeCustom<typeof calculate>

// type ParamsCustom<Func extends (...args: any[]) => unknown> = 
//     Func extends (...args: infer Params) => unknown
//         ? Params
//         : never

// type CallbackParams = ParamsCustom<typeof callback>
// type CalculateParams = ParamsCustom<typeof calculate>

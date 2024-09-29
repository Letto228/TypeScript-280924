// import "reflect-metadata"

// export class Calculator {
//     result?: number;

//     @MeasureTime()
//     sum(a: number, b: number): number {
//         return a + b;
//     }

//     @MeasureTime()
//     method(this: Calculator & {result: number}): number {
//         return this.result;
//     }
// }

// class Test {
//     @MeasureTime()
//     test() {

//     }
// }

// function method(this: {name: string}) {
//     return this.name;
// }

// method.call({name: 'str'});

// function MeasureTime() {
//     return (
//         target: object,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) => {
//         const originMethod = descriptor.value;

//         descriptor.value = function(...args: unknown[]): unknown {
//             console.time(propertyName);

//             const result = originMethod.apply(this, args);

//             console.timeEnd(propertyName);

//             return result;
//         }
//     }
// }

// const calculator = new Calculator();

// calculator.sum(123, 321);

// // --------------------------------------------------------

// type ServiceMetadata = {isSingleton: true};
// type Constructor = new (...args: unknown[]) => any;

// @Service({isSingleton: true})
// class UserService {}

// function Service(metadata: ServiceMetadata) {
//     return function (ctor: Constructor) {
//         Reflect.defineMetadata('service', metadata, ctor);
//     }
// }

// function isServiceMetadata(entity: unknown): entity is ServiceMetadata {
//     const serviceMetadata = entity as ServiceMetadata;

//     return typeof serviceMetadata === 'object' && typeof serviceMetadata.isSingleton === 'boolean';
// }

// const instanceStorage = new Map();

// function getInstance<ServiceConstructor extends Constructor>(
//     Service: ServiceConstructor,
// ): ServiceConstructor {
//     const metadata: unknown = Reflect.getMetadata('service', Service);

//     if (!isServiceMetadata(metadata)) {
//         return new Service();
//     }

//     if (!metadata.isSingleton) {
//         return new Service();
//     }

//     if (!instanceStorage.get(Service)) {
//         instanceStorage.set(Service, new Service());
//     }

//     return instanceStorage.get(Service);
// }

// getInstance(UserService);

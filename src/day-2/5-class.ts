// type Movie = {
//     title: string;
//     duration: number;
// }

// class Film implements Movie {
//     // title: string;
//     // duration: number;

//     // constructor(title: string, duration: number) {
//     //     this.title = title;
//     //     this.duration = duration
//     // }

//     private name: string = '';

//     constructor(
//         public readonly title: string,
//         public readonly duration: number,
//         private readonly director: string
//     ) {}

//     getTitle(): string {
//         return this.title;
//     }
// }

// const film = new Film('str', 123, '');
// // const film: Film = {
// //     title: 'str',
// //     duration: 123,
// // };

// abstract class NodeGraph {
//     x: number = 0;
//     y: number = 0;

//     abstract paint(): void;

//     calucateSize(): number {
//         return 100;
//     }
// }

// class StorageNode extends NodeGraph {
//     paint(): void {
//         throw 'StorageNode';
//     }
// }

// class FabricNode extends NodeGraph {
//     paint(): void {
//         throw 'FabricNode';
//     }
// }

// class CarNode extends NodeGraph {
//     paint(): void {
//         throw 'CarNode';
//     }
// }

// function paint(nodes: NodeGraph[]) {
//     nodes.forEach(node => node.paint());
// }

// paint([new StorageNode(), new FabricNode(), new CarNode()]);

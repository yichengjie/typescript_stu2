export interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}
let square = <Square>{};
//let square : Square = {}; // 这个会报错，因为color是必填属性
square.color = "blue";
square.sideLength = 10;
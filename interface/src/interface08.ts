export interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
//你不能设置myArray[2]，因为索引签名是只读的。
myArray[2] = "Mallory"; // error!
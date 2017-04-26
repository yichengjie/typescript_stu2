export interface SquareConfig {
    color?: string;
    width: number;
    [propName:string] :any
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
    let retObj = {color:'',area:10} ;
    return retObj ;
}

let t : SquareConfig = { c: 100, opacity: 0.5} ;

let mySquare  = createSquare({ width: 100, opacity: 0.5 });

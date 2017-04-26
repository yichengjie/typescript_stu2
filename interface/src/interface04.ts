export interface SearchFunc{
    (source:string,subString:string) :boolean ;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}

// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//   let result = src.search(sub);
//   if (result == -1) {
//     return false;
//   }
//   else {
//     return true;
//   }
// }

// let mySearch : SearchFunc ;
// mySearch = function(source:string,subString:string){
//     let result = source.search(subString) ;
//     if(result == -1){
//         return false ;
//     }
//     return true ;
// }
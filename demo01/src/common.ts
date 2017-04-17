export function add(a:number,b:number){
    return a + b ;
}


export function add2 (a:number,b:number){
     add(a,b) ;
     console.info('name : ' , this.name) ;
}
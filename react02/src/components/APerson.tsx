abstract class Animal {
    form : any ;
    private greeting: string ;
    public constructor(message : string){
        this.greeting = message ;
        this.form = {} ; 
        this.form.move = this.move;
    }
    abstract makeSound(): void;
    public move = () :string=> {
        console.info('abstract class Animal method [move()] is called ... ['+this.greeting+'] ') ;
        return '' ;
    }
}

class Zhangsan extends Animal{
    makeSound(){
        this.form.move() ;
    }
    public move = () => {
        return "" ;
    } 
}

new Zhangsan("zhang san").makeSound() ;


let myAdd: (baseValue:number, increment:number) => number = function(x: number, y: number): number { 
    return x + y;
 };

//  let identity = function<T>(x: T): T {
//     // ...
//     T t =  T() ;
//     return t ;
// }

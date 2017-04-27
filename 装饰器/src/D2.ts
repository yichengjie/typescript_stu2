export function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.info(`propertyKey : ${propertyKey}`) ;
        descriptor.enumerable = value;
    };
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}


let g = new Greeter('yicj') ;
g.greet() ;

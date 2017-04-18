import {add,add2} from './common' ;

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


function test(){
    var user = { firstName: "Jane", lastName: "User" };

    let str = greeter(user);

    console.info('add(1,2) = ' + add(1,2)) ;

    console.info("greeter : " + str) ;
    add2.call({name:'yicj'},1,2)
}

export default test ;


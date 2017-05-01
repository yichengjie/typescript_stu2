export function foo(num){
    console.info(`num : ${num}`) ;
    //记录foo被调用的次数
    //注意，在当前的调用方式下，this确实可以指向foo
    this.count ++ ;
}

foo.count = 0 ;

var i ;

for(i = 0 ; i < 10 ; i ++){
    if(i > 5) {
        foo.call(foo,i) ;
    }
}

console.info(foo.count) ;


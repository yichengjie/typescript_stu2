export function foo(num){
    console.info(`foo : ${num}`) ;
    //记录foo被调用的次数
    data.count ++ ;
}

var data = {
    count : 0 
} ;

var i ;

for(i = 0 ; i < 10 ; i ++){
    if(i > 5){
        foo(i) ;
    }
}

console.info(data.count) ;
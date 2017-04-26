export interface SearchFunc {
  (source: string, subString: string):void;
}

let MySearchFn: SearchFunc;
MySearchFn = function(source: string, subString: string):void {
  let result = source.search(subString);
  console.info(result) ;
}

let t = new MySearchFn("source","subString") ;
console.info(t) ;



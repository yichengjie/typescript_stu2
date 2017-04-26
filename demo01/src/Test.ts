/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

let strings = ["Hello", "98052", "101"];
var validators :{[s:string]:Validation.StringValidator} = {} ;
validators["ZIP code"] = new Validation.ZipCodeValidator() ;
validators["Leggers only"] = new Validation.LettersOnlyValidator() ;

strings.forEach(s =>{
    for(let name in validators){
        console.log(`"${s}" ` +(validators[name].isAcceptable(s) ? "matches" : "does not match " + name)) ;
    }
}) ;
//partial application using currying
const multiply = a=>b=>a*b;
const double = multiply(2);
const triple = multiply(3);

console.log(double(5));
console.log(triple(15));

//generic currying
function carry(fn){
    return function curried(...args){
        if(args.length>=fn.length){
            return fn(...args);
        }
        else{
            return function(...nextArgs){
                return curried(...args, ...nextArgs);
            };
        }
    };
};
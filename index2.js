
// //shallow copy
// let arr = [1,2,3,[4,5]];
// let arrcopy = [...arr];
// arrcopy[3][0] = 10;
// console.log(arr);
// console.log(arrcopy);

// //deepcopy
// let user = {
//     name: "abc",
//     marks: {
//         maths:98,
//         science:97,
//     },
// }
// let usercpy=JSON.parse(JSON.stringify(user));
// usercpy.marks.maths="45";
// console.log(user);
// console.log(usercpy);

//---------------------------------------------
// add = a=>b=>c=>a+b+c;


// console.log(add(1)(2)(4));

function add(a, b, c){
    console.log(a);
    return a+b+c;
}

const curried = add.bind(null, 2);

console.log(curried(3,4));
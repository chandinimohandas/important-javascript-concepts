//#############################################################
// Example 1: with normal functions

// function outerFunction(outerVariable){
//     const greetings='Hi';
//     return function innerFunction(innerVariable){
//         console.log('outerVariable: '+outerVariable);
//         console.log('innerVariable: '+innerVariable);
//         console.log('Greetings: '+ greetings);
//     }
// };

// const myInnerFunction = outerFunction('outer variable');
// myInnerFunction('inner var');

//#############################################################
//Example 2: With anonymous arrow functions

// const globalVar='Hi, ';

// const func1 = (var1)=>{
//     return (var2) =>{
//         return (var3)=>{
//             console.log(globalVar + var1 + var2 + var3);
//         }
//     }
// };

// // const myFunc = func1;
// console.dir(func1('herh'));

// func1('this ')('is ')('Chandini ')

//#############################################################
//Example 3: Memory Leak due to closures - read more

// const outer = ()=>{
//     let outerVar='hello';
//     const inner = ()=>{
//         console.log(outerVar + ' it\'s me');
//     };
// }

// outer();

//#############################################################
//Example 3: cloasures inside a loop

for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}
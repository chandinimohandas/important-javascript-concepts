const chandini ={
    firstName: 'Chandini',
    lastName: 'Mohandas'
}

function printName(homeTown,timeOfDay){
    console.log('Hi, I am '+ this.firstName + ' '+ this.lastName+' from '+homeTown+'. Have a nice '+ timeOfDay);
}

// const greeting = printName.bind(chandini);
// greeting();

Function.prototype.myBind=function(...arg){
 let obj = this;
 return function(...params){
    obj.apply(arg[0],[...arg.slice(1), ...params]);
 } 
}

const greeting = printName.myBind(chandini, 'Chennai', 'evening');
greeting();
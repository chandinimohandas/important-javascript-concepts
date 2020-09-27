// let chandini = {
//     firstName: 'Chandini',
//     lastname: 'Mohandas',
//     printFullName: function(timeOfDay){
//         console.log('Hi, I am '+this.firstName+ ' ' + this.lastname+'. Have a nice '+ timeOfDay)
//     }
// };

// chandini.printFullName();

let shalini = {
    firstName: 'Shabu',
    lastname: 'Shabu',
};

//Function borrowing with call apply and bind
// chandini.printFullName.call(shalini,'morning');
// chandini.printFullName.apply(shalini,['morning']);
// const greeting = chandini.printFullName.bind(shalini);
// greeting('morning');

let chandini = {
    firstName: 'Chandini',
    lastname: 'Mohandas'
}
function printFullName(timeOfDay){
    console.log('Hi, I am '+this.firstName+ ' ' + this.lastname+'. Have a nice '+ timeOfDay);
}

// printFullName.call(chandini, 'morning');
// printFullName.apply(shalini, ['evening']);
const greeting = printFullName.bind(chandini, 'night');
greeting();
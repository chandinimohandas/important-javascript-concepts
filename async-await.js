//#####################################################################
// Example without async

// const getPen = ()=>{return new Promise((hasPen, penNotFound)=>{
//     hasPen('Pen');
// })};

// const getPaper =()=>{ return new Promise((hasPaper, paperNotFound)=>{
//     hasPaper('Paper');
// })};

// Promise.all([getPen(),getPaper()]).then((message,)=>{
// console.log(message);
// });

//#####################################################################
// Example with async-await

const getPen = new Promise((hasPen, penNotFound)=>{
    hasPen('Pen');
});

const getPaper = new Promise((hasPaper, paperNotFound)=>{
    hasPaper('Paper');
});

const writingALetter = async ()=>{
    let letter;

    try{
        letter = `Written with ${await getPen} and ${await getPaper}`;
    } catch{
        letter = 'Couldn\'t write the letter';
    }

    return letter;
};

writingALetter().then((letter)=>console.log(letter));
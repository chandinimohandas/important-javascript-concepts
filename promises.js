const promiseToGiveInterview = new Promise((jobOffered, rejected) =>{
    setTimeout(()=>{
        jobOffered('yayyy you got the job');
    },1000);
    // setTimeout(()=>{
    //     rejected('Better luck next time');
    // },1000);
});

promiseToGiveInterview.then((result)=>{
    console.log(result);
}).catch((result)=>{
    console.log(result);
}).finally(()=>{
    console.log('End of the process');
})
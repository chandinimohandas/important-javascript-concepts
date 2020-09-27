let count=0;

function oldGetData(){
    console.log('Fetching data...'+count++);
}

function whenUserPauses(func, delay){
    let context = this;
    let params = arguments;
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(context, params);
         },delay);
    };
}

const getData = whenUserPauses(oldGetData,500);

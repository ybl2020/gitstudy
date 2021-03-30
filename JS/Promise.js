const isPregnant = false;

const promise = new Promise((resolve,reject)=>{
    if(isPregnant){
        resolve(`孩子他爹`);
    }else{
        reject(`老公`);
    }
});

promise
    .then(name => {
        console.log(`男人成为${name}!`);
    })
    .catch(name => {
        console.log(`男人成为${name}!`);
    })
    .finally(()=>{console.log(`他们最终结婚了`)})
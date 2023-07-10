const fs=require('fs')

const text='i am writing from js';

fs.writeFile('write.txt',text,(err,data)=>{
    if(err)throw err;
    console.log("Done with writing:");
})
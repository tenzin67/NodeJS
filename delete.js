const fs=require('fs')

fs.unlink('text.txt',(err,data)=>{
    if(err) throw err;
    console.log('file is deleted');
})
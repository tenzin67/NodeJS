const fs=require('fs')


fs.readFile('text.txt',(err,data)=>{
    if(err) throw err,
    console.log('successful read the file');
    console.log(String(data));
})

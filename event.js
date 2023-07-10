const EventEmitter = require('events');
const { emit } = require('process');

var eventobj=new EventEmitter();

eventobj.addListener('human',()=>{
    console.log('we eat!');
})

var fun=()=>{
    console.log('we sleep!');
}

eventobj.on('human',fun)
eventobj.emit('human')
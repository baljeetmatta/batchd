// const EventEmitter=require("events");
// const event=new EventEmitter();

// function log()
// {
//     console.log("Working on log");
//     event.emit("Done");
// }

// module.exports.log=log;
// module.exports.event=event;

const EventEmitter =require("events");
class Logger extends EventEmitter
{
    log()
    {
        console.log("Weoking on log");
        this.emit("Done");

    }
}


module.exports=Logger;


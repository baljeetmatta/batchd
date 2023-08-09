// const log=require("./eventmodule");
// const EventEmitter=require("events");
// const event=new EventEmitter();
// event.on("Done",()=>{
//     console.log("Done handled in current module");

// })
// log();
/*
const obj=require("./eventmodule");
obj.event.on("Done",()=>{
    console.log("Done handled");
})
obj.log();
*/
const Logger=require("./eventmodule");
const logger=new Logger();
logger.on("Done",()=>{
    console.log("Done handled");
})
logger.log();


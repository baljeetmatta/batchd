//os
// const os= require("os");
// console.log(os.totalmem());
// console.log(os.freemem());
//fs
const fs=require("fs");
//const contents=fs.readFileSync("./Page1.js","utf-8");
//console.log(contents);
// fs.readFile("./Page18.js","utf-8",(err,data)=>{
//     if(err)
//     console.log("Error in reading file");
//     else
// console.log(data);
// })
// console.log("Reading...");

//fs.writeFileSync("./data.txt","Hello to node js");
/*fs.writeFile("./data.txt", "Demo",(err)=>{

})

fs.readdir("./",(err,files)=>{
    console.log(files);
})*/
function search(path)
{

    fs.readdir(path,(err,files)=>{
       // console.log(files);
       if(!err)
       {
       files.forEach((item)=>{
        console.log(path+"/"+item);
        search(path+"/"+item)
       })
       }
    })

}
search(".");

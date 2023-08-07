const fs=require("fs");

function search(path)
{
    fs.readdir(path,(err,files)=>{

if(!err)
{
        files.forEach((item)=>{
          // console.log(fs.existsSync(path+item));
          console.log(path+"/"+item);
          search(path+"/"+item);

        })
    }

    })
}
search(".");
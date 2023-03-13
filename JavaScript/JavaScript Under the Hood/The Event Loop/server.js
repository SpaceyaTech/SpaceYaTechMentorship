import fs from "fs"
import path from "path"

// console.log(fs.readFileSync('text.txt','utf-8'))
fs.readFile('text.txt','utf-8',(err,data)=>{
  if(err){
    console.log("We could not read the data")
  }else{
    console.log(data)
  }
})
console.log('This is a console log')
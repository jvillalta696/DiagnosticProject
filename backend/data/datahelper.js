const fs = require('fs')

const readData = (file)=>{
    let obj = {};
   const data = fs.readFileSync(file);
   obj = JSON.parse(data);
      return obj;
}

const writeData = (file,data)=>{
    try {
        fs.writeFileSync(file, data);
        console.log('Data write successfully');
      } catch (err) {
        console.error(err);
      }
}

const getListfiles =  (dir)=>{
    let info ;
     info = fs.readdirSync(dir);      
      return info;
}

module.exports = {
    readData,
    writeData,
    getListfiles

}
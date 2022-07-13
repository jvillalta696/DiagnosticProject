const fs = require('fs')
const readData = (file)=>{
    fs.readFile(file,'utf-8', (err, data) => {
        if(err) {
          console.log('error: ', err);
        } else {
          const obj = JSON.parse(data);
          return obj;
        }
      });
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
      console.log(info);
      return info;
}

module.exports = {
    readData,
    writeData,
    getListfiles

}
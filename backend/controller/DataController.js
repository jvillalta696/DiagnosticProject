let datahelper = require("../data/datahelper");
const path = "../data";
let object = { nombre: "Carlos", apellido: "Pepito" };

const saveData = (fileName, data) => {
  let filePath = `${path}/${fileName}.txt`;
  let info = JSON.stringify(data);
  try {
    datahelper.writeData(filePath, info);
  } catch (ex) {
    console.log(ex);
  }
};

const loadData = (filename) => {
  try {
    datahelper.readData(filename);
  } catch (ex) {
    console.log(ex);
  }
};

const getData = async ()=>{
    await datahelper.getListfiles(path)
}
module.exports = {
  saveData,
  loadData,
  getData
};

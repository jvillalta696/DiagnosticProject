let datahelper = require("../data/datahelper");
const path = "../data";
let object = { nombre: "Carlos", apellido: "Pepito" };

const saveData = (req, res) => {
  let filePath = `${path}/${req.params.filename}.txt`;
  let info = JSON.stringify(req.body);
  try {
    datahelper.writeData(filePath, info);
  } catch (ex) {
    console.log(ex);
  }
};

const loadData = (req,res) => {
  try {
  let filePath = `${path}/${req.params.filename}.txt`;
   const data = datahelper.readData(filePath);
   res.send(data)
  } catch (ex) {
    console.log(ex);
  }
};

const getData = async (req,res)=>{
    const data = await datahelper.getListfiles(path)
    res.send(data)
}
module.exports = {
  saveData,
  loadData,
  getData
};

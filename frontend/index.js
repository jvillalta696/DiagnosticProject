let controller = require('../backend/controller/DataController');
let object = {nombre: "Carlos",
apellido:"Pepito" }
controller.saveData('NuevaPrueba3',object)
controller.getData()
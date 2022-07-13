let controller = require('../backend/controller/DataController');
let object = {nombre: "Carlos",
apellido:"Pepito" }
controller.saveData('NuevaPrueba',object)
controller.getData()
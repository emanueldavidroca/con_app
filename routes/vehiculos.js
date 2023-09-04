var express = require('express');
var router = express.Router();
let vehiculosController = require("../controller/vehiculos");
let userRolValidation = require("../middlewares/userRolValidation");

/* GET users listing. */
router.get('/alquiler'/*,userRolValidation("administrador")*/,vehiculosController.alquiler);
router.get('/'/*,userRolValidation("administrador")*/,vehiculosController.create);
router.post('/'/*,userRolValidation("administrador")*/,vehiculosController.store);


module.exports = router;

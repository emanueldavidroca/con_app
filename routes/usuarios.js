var express = require('express');
var router = express.Router();
let usuariosController = require("../controller/usuarios");
let userRolValidation = require("../middlewares/userRolValidation");

/* GET users listing. */
router.get('/list',userRolValidation("administrador"),usuariosController.list); //localhost:3001/users/list
router.get("/login",usuariosController.login);
router.post("/login",usuariosController.logear);
router.get("/mi_cuenta",usuariosController.mi_cuenta);
router.get("/create",userRolValidation("administrador"),usuariosController.create);
router.post("/create",userRolValidation("administrador"),usuariosController.store);
router.get("/edit/:id",userRolValidation("administrador"),usuariosController.edit);
router.put("/edit/:id",userRolValidation("administrador"),usuariosController.update);
router.get("/delete/:id",userRolValidation("administrador"),usuariosController.remove);
router.get("/changePassword",userRolValidation("any"),usuariosController.changePassword);
router.post("/changePassword",userRolValidation("any"),usuariosController.newPassword);

module.exports = router;

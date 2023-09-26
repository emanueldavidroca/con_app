const session = require("express-session");
const {usuarios,roles} = require("../database/models");

let usuariosController = {
    create: async (req, res) => {
        let status = req.query.status ?? null;
        let lista_roles = await roles.findAll();
        let lista_usuarios = await usuarios.findAll();
        res.render("./usuarios",{sess:req.session,tab:"gestion",title:"usuarios",lista_roles,lista_usuarios,status});
    },
    store: async (req, res) => {
        try {
            let {firstName,lastName,password,password2,email,phoneNumber,rol} = req.body;

            if(password != password2){
                res.redirect("/admin/usuarios?status=password");
                throw "error";
            }
            let resultado = await usuarios.create({nombre:firstName+" "+lastName,email,password,telefono:phoneNumber,idRol:rol})
            if(resultado){
                res.redirect("/admin/usuarios?status=success");
            }
        } catch (error) {
            console.log(error)
        }
        
    },
    mi_cuenta:(req,res)=>{
        res.render("./mi_cuenta",{sess:req.session,tab:"usuarios",title:"mi cuenta"});
    },
    datos_pago:(req,res)=>{
        res.render("./datos_pago",{sess:req.session,tab:"usuarios",title:"datos de pago"});
    },
    mis_ordenes:(req,res)=>{
        res.render("./mis_ordenes",{sess:req.session,tab:"usuarios",title:"mis ordenes"});
    },
    
}
module.exports = usuariosController;
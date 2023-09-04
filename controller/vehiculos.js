const session = require("express-session");
const {usuarios,vehiculos,eventos,reservas} = require("../database/models");

let vehiculosController = {
    lista_vehiculos:async (req,res) =>{
        let vehiculos_lista = await vehiculos.findAll();
        res.render("./lista_vehiculos",{tab:"servicios",title:"alquiler",vehiculos_lista});
    },
    alquiler:async (req,res) =>{
        let {id} = req.params;
        let vehiculo = await vehiculos.findOne({where:{id}});
        let eventos_lista = await eventos.findAll();

        res.render("./alquiler",{tab:"servicios",title:"alquiler",vehiculo,eventos_lista});
    },
    alquiler2:async (req,res) =>{
        let vehiculos_lista = await vehiculos.findAll();

        res.render("./alquiler2",{tab:"servicios",title:"alquiler2",vehiculos_lista});
    },
    alquiler_paso2:async (req,res) =>{
        sess = req.session;
        console.log(sess);
        const {vehiculo,evento,fecha} = req.body;
        let result = await reservas.create({
            idUsuario:sess.idUser,idVehiculo:vehiculo,idEvento:evento,fecha:fecha
        });

        res.render("./alquiler2",{tab:"servicios",title:"alquiler2"});
    },
    alquiler3:async (req,res) =>{
        let vehiculos_lista = await vehiculos.findAll();

        res.render("./alquiler3",{tab:"servicios",title:"alquiler3",vehiculos_lista});
    },
    alquiler_paso3:async (req,res) =>{
        let {idUser} = res.session;
        const {vehiculo,evento,fecha} = req.body;
        let result = await reservas.create({
            idUsuario:idUser,idVehiculo:vehiculo,idEvento:evento,fecha:fecha
        });

        res.render("./alquiler2",{tab:"servicios",title:"alquiler2",vehiculos_lista});
    },
    create:async (req,res) =>{
        try {
            let vehiculos_list = await vehiculos.findAll();
            res.render("./vehiculos",{tab:"gestion",title:"vehiculos",vehiculos_list});
        } catch (error) {
            console.log(error)
        }
        
    },
    store:async (req,res) =>{
        try{
            const {model,brand,year,power,weight,level} = req.body;
            let result = await vehiculos.create({
                modelo:model,marca:brand,año:year,potencia:power,peso:weight,nivel:level
            });
            
            if(result){
                res.redirect("/vehiculos?result=success");
            }
            else{
                res.redirect("/vehiculos?result=error");
            }
        }
        catch(error){
        }
    },
}
module.exports = vehiculosController;
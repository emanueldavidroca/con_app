const session = require("express-session");
const { Op } = require("sequelize");
const {usuarios,vehiculos,eventos,reservas,opcion_alquileres}  = require("../database/models");
let alquileresController = {
    alquiler:async (req,res) =>{
        let status = req.query.status ?? null;
        let vehiculos_lista = await vehiculos.findAll();
        
        res.render("./alquiler",{sess:req.session,tab:"servicios",title:"alquiler paso 1",vehiculos_lista,status});
    },
    alquiler2:async (req,res) =>{
        let {id} = req.params;
        let vehiculo = await vehiculos.findOne({where:{id}});
        let eventos_lista = await eventos.findAll();
        console.log(vehiculo.id);
        let sess = req.session ?? null;
        sess.idAlquiler = vehiculo.id;
        sess.paso = 2;
        req.session.save(function(err) {
            console.log("saved");
        })
        res.render("./alquiler2",{sess:req.session,tab:"servicios",title:"alquiler paso 2",vehiculo,eventos_lista});
    },
    alquiler_paso2:async (req,res) =>{
        try {
            if(req.body.reset){
                let sess = req.session;
                delete sess["paso"]; 
                delete sess["idAlquiler"]; 
                req.session.save(function(err) {
                    console.log("borrado");
                })
                res.redirect("/servicios/alquiler/");
                throw("reset")
            }
            const {vehiculo,evento,fecha} = req.body;
            let sess = req.session ?? null;
            console.log(new Date(fecha).toISOString());
            let result = await reservas.create({
                idUsuario:sess.idUser,idVehiculo:vehiculo,idEvento:evento,fecha:new Date(fecha).toISOString()
            });
            sess.paso = 3;
            req.session.save(function(err) {
                console.log("saved");
            })
            res.redirect("/servicios/alquiler3/"+result.dataValues.id);
        } catch (error) {
            console.log(error)
        }
        
    },
    alquiler3:async (req,res) =>{
        let vehiculos_lista = await vehiculos.findAll();
        let {id} = req.params;
    
        res.render("./alquiler3",{sess:req.session,tab:"servicios",title:"alquiler paso 3",vehiculos_lista,id});
    },
    alquiler_paso3:async (req,res) =>{
        const {cantidadVueltas,naftaIncluida,instructorABordo,analisisTelemetria,seguroPremium,compuestoNeumaticos,idReserva} = req.body;
        let resultado = await opcion_alquileres.create({
            cantidadVueltas,naftaIncluida,instructorABordo,analisisTelemetria,seguroPremium,compuestoNeumaticos
        });
        let result = await reservas.update({
            idOpcionAlquiler:resultado.dataValues.id
        },{where:{id:idReserva}});

        let sess = req.session ?? null;
        sess.paso = 4;
        req.session.save(function(err) {
            console.log("saved");
        })
        res.redirect("/servicios/alquiler4/"+idReserva);
    },
    alquiler4:async (req,res) =>{
        let {id} = req.params;
        let resumen = await reservas.findOne({where:{id},include:[{model:usuarios,as:"usuario"},{model:opcion_alquileres,as:"opcion"},{model:eventos,as:"evento"},{model:vehiculos,as:"vehiculo"}]});
        res.render("./alquiler4",{sess:req.session,tab:"servicios",title:"alquiler paso 4",resumen});
    },
    
}
module.exports = alquileresController;


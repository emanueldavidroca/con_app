const session = require("express-session");
const { Op } = require("sequelize");
const {usuarios,vehiculos,eventos,reservas,opcion_alquileres,roles,pagos_pendientes}  = require("../database/models");
let pagosPendientesController = {
    lista:async (req, res) => {
        try {
            let pagos_pendientes_list = await pagos_pendientes.findAll({where:{status:"pendiente"},include:[{model:usuarios,as:"usuario"},{model:reservas,as:"reserva"}]})
            let pagos_confirmados_list = await pagos_pendientes.findAll({where:{status:"confirmado"},include:[{model:usuarios,as:"usuario"},{model:reservas,as:"reserva"}]})

            res.render("./pagos",{sess:req.session,tab:"gestion",title:"Pagos",pagos_pendientes_list,pagos_confirmados_list});
        } catch (error) {
            console.log(error);
        }
    },
    detalle:async (req, res) => {
        try {
            let {id} = req.params;
            let pagos_pendientes_detalle = await pagos_pendientes.findOne({where:{id},include:[{model:usuarios,as:"usuario"},{model:reservas,as:"reserva"}]})

            res.render("./pago_detalle",{sess:req.session,tab:"gestion",title:"Pagos",pagos_pendientes_detalle});
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports = pagosPendientesController;
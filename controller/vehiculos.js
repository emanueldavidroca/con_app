const session = require("express-session");
const {usuarios,vehiculos} = require("../database/models");

let vehiculosController = {
    alquiler:async (req,res) =>{
        let vehiculos_lista = await vehiculos.findAll();

        res.render("./alquiler",{tab:"servicios",title:"alquiler",vehiculos_lista});
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
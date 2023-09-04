const session = require("express-session");
const {usuarios,vehiculos} = require("../database/models");

let vehiculosController = {
    alquiler:async (req,res) =>{
        res.render("./alquiler");
    },
    create:async (req,res) =>{
        try {
            let vehiculos_list = await vehiculos.findAll();
            res.render("./vehiculos",{vehiculos_list});
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
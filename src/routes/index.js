const express = require("express");
const router = express.Router();

// Se utilizo https://glb-packer.glitch.me/ para convertir los gltf a glb
router.get("/",(req, res)=>{
    res.render("index", {
        title:"Catálogo de robots",
    products:[
        {id:"1",title:"Auto Especial", modelAndroid:"auto-espacial.glb", modelIos:"", scale : "0.1 0.1 0.1", portada:"auto-espacial.gif", direccion:"0",
        info:"Es un auto espacial diseñado para soportar una diversa cantidad de situaciones y terrenos." ,
    
    },
        {id:"2",title:"Robot Espacial", modelAndroid:"robot_espacial.glb", modelIos:"", scale : "0.9 0.9 0.9", portada:"robot-espacial.gif",direccion:"3",
        info:"Es un robot diseñado para la exploración espacial y posee paneles solares en su espalda para poder cargar sus baterías." ,
    
    },
        {id:"3",title:"Robot con brazos", modelAndroid:"robot-con-brazos.glb", modelIos:"", scale : "0.2 0.2 0.2", portada:"robot-con-brazos.gif",direccion:"3",
        info:"Este robot se especializa en mover objetos de un lugar a otro con sus brazos mecánicos." ,
    },
        {id:"4",title:"Robot Camara", modelAndroid:"robot-camara.glb", modelIos:"", scale : "1.3 1.3 1.3", portada:"robot-camara.gif",direccion:"2",
        info:"Es un robot que se caracteriza por la gran cámara que posee al frente de su estructura."
    }
    ]});   
});
module.exports=router;
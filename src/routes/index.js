const express = require("express");
const router = express.Router();
// Se utilizo https://glb-packer.glitch.me/ para convertir los gltf a glb
router.get("/",(req, res)=>{
    res.render("index", {
        title:"Catalogo de muebles",
    products:[
        {id:"1",title:"Robot Espacial", modelAndroid:"auto-espacial.glb", modelIos:"", 
        info:"Lorem ipsum dolor sit amet consectetur adipiscing elit, class sapien cras justo venenatis pretium convallis neque, taciti dictum tellus leo eu parturient. " ,
    
    },
        {id:"2",title:"Perro robot", modelAndroid:"perro-robot.glb", modelIos:"", 
        info:"Lorem ipsum dolor sit amet consectetur adipiscing elit, class sapien cras justo venenatis pretium convallis neque, taciti dictum tellus leo eu parturient. " ,

    },
        {id:"3",title:"Auto Espacial", modelAndroid:"robot_espacial.glb", modelIos:"", 
        info:"Lorem2 ipsum dolor sit amet consectetur adipiscing elit, class sapien cras justo venenatis pretium convallis neque, taciti dictum tellus leo eu parturient. " ,
    
    },
        {id:"4",title:"Robot Camara", modelAndroid:"robot-camara.glb", modelIos:"", 
        info:"Lorem2 ipsum dolor sit amet consectetur adipiscing elit, class sapien cras justo venenatis pretium convallis neque, taciti dictum tellus leo eu parturient. " ,

    },
        {id:"5",title:"Robot con Brazos", modelAndroid:"robot-con-brazos.glb", modelIos:"", 
        info:"Lorem2 ipsum dolor sit amet consectetur adipiscing elit, class sapien cras justo venenatis pretium convallis neque, taciti dictum tellus leo eu parturient. " ,

    },
    ]});
});

router.get("/control",(req, res)=>{
    res.render("control", {title:"Seccion de contacto",
    products:[
        {id:"1",title:"mesa 1",model:"modelo.gltf"},
        {id:"2",title:"mesa 2",model:"modelo2.gltf"} 
    ]});
});

module.exports=router;
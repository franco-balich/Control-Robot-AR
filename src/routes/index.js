const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
    res.render("index", {
        title:"Catalogo de muebles",
    products:[
        {id:"1",title:"silla 1", modelAndroid:"robotech.glb", modelIos:"", 
        info:"Lorem ipsum dolor sit amet consectetur adipiscing elit, class sapien cras justo venenatis pretium convallis neque, taciti dictum tellus leo eu parturient. " ,
    
    },

        {id:"2",title:"silla 2", modelAndroid:"batman.glb", modelIos:"", 
        info:"Lorem ipsum dolor sit amet consectetur adipiscing elit, class sapien cras justo venenatis pretium convallis neque, taciti dictum tellus leo eu parturient. " ,
    
    },
    ]});
});

router.get("/contact",(req, res)=>{
    res.render("contact", {title:"Seccion de contacto",
    products:[
        {id:"1",title:"mesa 1",model:"modelo.gltf"},
        {id:"2",title:"mesa 2",model:"modelo2.gltf"} 
    ]});
});

module.exports=router;
var buttons = document.querySelectorAll('button');

function ButtonC(msg){
    alert(msg);
}
/*
buttons.forEach((item)=>{
    item.addEventListener('click', ()=>{
        ButtonC("Ejemplo de funcion");
    });
});
*/
document.querySelector("#model-viewer").addEventListener('ar-status', (event) => {
    if(event.detail.status === 'not-session-started'){
        var boton = document.getElementById("btnControl");
        boton.removeClass('hide');
        
    }
    else{
        boton.addClass('hide');
    }
  });
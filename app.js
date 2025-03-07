document.getElementById("descargar_cv").addEventListener("click",descargarCv);
function descargarCv(){
    let enlace = document.createElement("a");
    enlace.href="docs/CV_Javier_Gutiérrez.pdf";
    enlace.download="CV_Javier_Gutiérrez.pdf";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}

document.getElementById("input-form-message").addEventListener("click",enviarMensaje)
function enviarMensaje(){
    let nombre = document.getElementById("input-form-nombre").value.trim();
    let email = "javimacias619@gmail.com"
    let asunto = document.getElementById("input-form-asunto").value.trim();
    let mensaje = document.getElementById("input-form-mensaje").value.trim();
    if(nombre ==="" || asunto ==="" || mensaje ===""){
        alert("Complete todos los campos para poder enviar el correo");
        return;
    }
    let enlace = document.createElement("a");

    enlace.href="mailto:"+email+"?subject="+encodeURIComponent(asunto)+"&body="+encodeURIComponent("Hola, mi nombre es "+ nombre +"y quiero: "+ mensaje);
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    document.getElementById("form").reset();

}   
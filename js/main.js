document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('cita');
    const mensaje=document.getElementById('mensaje');

    form.addEventListener('submit',function(event){
        event.preventDefault();//Evita que el formulario se mande de forma tradicional

        //Obtener valores del formulario
        const nombre=document.getElementById('nombre').value.trim();
        const telefono=document.getElementById('telefono').value.replace(/\s+/g, "");
        const especialidad=document.getElementById('especialidad').value;

        //Validacion del formulario
        if(nombre===""||telefono===""||especialidad===""){
            mensaje.textContent="Error: Por favor completa los campos vacios.";
            mensaje.style.color='red';
            mensaje.style.fontSize='25px';
        mensaje.style.backgroundColor='white';
        mensaje.style.border='10px solid white';
        mensaje.style.borderRadius='10px';
            return;
        }

        //Validar el formato del telefono
        if(telefono.length<8){
            mensaje.textContent="Error: El teléfono parece estar incompleto.";
            mensaje.style.color="red";
            mensaje.style.fontSize='25px';
        mensaje.style.backgroundColor='white';
        mensaje.style.border='10px solid white';
        mensaje.style.borderRadius='10px';
            return;
        }

        if(isNaN(Number(telefono))){
            mensaje.textContent="Error: Escribe un numero de teléfono válido.";
            mensaje.style.color="red";
            mensaje.style.fontSize='25px';
        mensaje.style.backgroundColor='white';
        mensaje.style.border='10px solid white';
        mensaje.style.borderRadius='10px';
            return;
        }

        

        //Simulacion de envio exitoso
        mensaje.textContent=`Cita agendada para el paciente: ${nombre}, tel. ${telefono}, para ${especialidad}`;
        mensaje.style.color='green';
        mensaje.style.fontSize='25px';
        mensaje.style.backgroundColor='white';
        mensaje.style.border='10px solid white';
        mensaje.style.borderRadius='10px';

        //Limpieza del formulario 
        form.reset();
    })
})
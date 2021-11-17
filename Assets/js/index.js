const formulario = document.getElementById ("form");
formulario.addEventListener ('submit', e => {
    e.preventDefault ();
    const Nombre = formulario ['nombre'].value;
    const Apellido = formulario ['apellido'].value;
    const Opciones = formulario ['radio'];
    const Documento = formulario ['documento'].value;
    const Correo = formulario ['correo'].value;
    const Observaciones = formulario ['observaciones'].value;

    console.log (Nombre, Apellido,Opciones,Documento,Correo,Observaciones);
})

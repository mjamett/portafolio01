const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_tg4q94y';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mensaje enviado exitosamente!');
      limpiarFormulario();
      

    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

function limpiarFormulario(){
  document.getElementById('form').reset();
}
// Validación del formulario
$('#contactoForm').on('submit', function (e) {
  e.preventDefault();

  let nombre = $('#nombre').val().trim();
  let correo = $('#correo').val().trim();
  let mensaje = $('#mensaje').val().trim();

  if (nombre === '' || correo === '' || mensaje === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (!correo.includes('@')) {
    alert('Por favor, ingresa un correo válido.');
    return;
  }

  alert('Mensaje enviado correctamente.');
  $(this).trigger('reset');
});

// Test de seguridad en el modal
$('#btnCorrecto').on('click', function () {
  $('#resultadoTest').text('¡Correcto! Nunca debes usar la misma contraseña en todos lados.')
                     .css('color', 'green');
});

$('#btnIncorrecto').on('click', function () {
  $('#resultadoTest').text('Respuesta incorrecta. Es un riesgo usar la misma contraseña.')
                     .css('color', 'red');
});

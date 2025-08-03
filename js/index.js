
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Limpiar mensajes de error previos
    document.querySelectorAll('.text-danger').forEach(span => {
      span.textContent = '';
    });

    // Obtener los valores de los campos
    const name = document.getElementById('name-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const subject = document.getElementById('subject-input').value.trim();
    const message = document.getElementById('message-textarea').value.trim();

    let hasError = false;

    // Validar el campo "Name"
    if (!name) {
      document.querySelector('.error-nombre').textContent = 'El campo "Name" es obligatorio.';
      hasError = true;
    }

    // Validar el campo "Email"
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      document.querySelector('.error-email').textContent = 'El campo "Email" es obligatorio.';
      hasError = true;
    } else if (!emailPattern.test(email)) {
      document.querySelector('.error-email').textContent = 'Por favor, ingrese un correo electrónico válido.';
      hasError = true;
    }

    // Validar el campo "Subject"
    if (!subject) {
      document.querySelector('.error-subject').textContent = 'El campo "Subject" es obligatorio.';
      hasError = true;
    }

    // Validar el campo "Message" (opcional)
    if (!message) {
      document.querySelector('.error-message').textContent = 'El campo "Message" no debe estar vacío.';
    }

    // Si no hay errores, enviar el formulario
    if (!hasError) {
      alert('Formulario enviado correctamente.');
      this.submit();
    }
  });


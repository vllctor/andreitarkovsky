import Swal from 'sweetalert2';

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Gracias!',
        text: 'Tu mensaje ha sido enviado.',
        icon: 'success'
    });
});
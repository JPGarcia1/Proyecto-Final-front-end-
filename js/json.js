document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('https://tu-backend-api.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Mensaje enviado con éxito');
                contactForm.reset();
            } else {
                alert('Hubo un problema al enviar el mensaje');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema al enviar el mensaje');
        }
    });
});

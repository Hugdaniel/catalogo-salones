window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    
    // Tiempo total que dura la intro en pantalla (2.2 segundos)
    setTimeout(() => {
        
        // Fase 1: Desvanecer el contenedor del loader suavemente cambiando su opacidad
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Fase 2: Esperamos que termine la transición de opacidad (600ms) para switchear las clases
        setTimeout(() => {
            // Eliminamos el loader por completo del flujo de la página
            loader.style.display = 'none';
            
            // Activamos el contenido principal con su animación de entrada suave hacia arriba
            mainContent.classList.remove('content-hidden');
            mainContent.classList.add('fade-in-up');
        }, 600); 

    }, 2200);
});

// --- CONTROLADOR DE LA GALERÍA DINÁMICA (INVITACIONES ESTÁTICAS) ---
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remover clase activa de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            // 2. Agregar clase activa al botón presionado
            button.classList.add('active');

            // 3. Obtener el ID del modelo objetivo desde el atributo data-target
            const targetModelId = button.getAttribute('data-target');

            // 4. Alternar las imágenes con transición suave
            items.forEach(item => {
                if (item.id === targetModelId) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });
    });
});
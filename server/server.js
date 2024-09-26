

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Habilitar CORS para todas las peticiones
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos del frontend (opcional si en algún momento decides unirlos)
app.use(express.static(path.join(__dirname, '../public')));

// Ruta principal (index)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Ruta para obtener análisis (esta es un ejemplo)
app.get('/api/analyses', (req, res) => {
    const analyses = [
        { title: 'La rebelión del 2022', summary: 'Un análisis de los eventos que llevaron a la toma de Lima.' },
        { title: 'Elecciones 2024: Un punto de inflexión', summary: '¿Hacia dónde se dirige Perú con las próximas elecciones?' },
    ];
    res.json(analyses);
});

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

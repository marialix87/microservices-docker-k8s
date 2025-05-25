const express = require('express');
const axios = require('axios');
const app = express();

const dbServiceUrl = 'http://db-service:5000/data'; // URL del servicio de datos

app.get('/api/data', async (req, res) => {
  try {
    // Realizar solicitud al servicio db-service
    const response = await axios.get(dbServiceUrl);
    res.json(response.data); // Enviar los datos recibidos como respuesta
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener los datos' });
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://0.0.0.0:3000');
});


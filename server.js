const express = require('express');
const app = express();
const Puerto = 3000


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

app.post('/reporte', (req, res) => {
    const mensaje = req.body.mensaje;
    res.json({
      estado: "Reporte recibido",
      mensaje: mensaje
    });
  });

app.listen(Puerto, () => {
  console.log('Servidor ejecutándose en puerto' + Puerto);
  console.log("Puedes abrir http://localhost:" + Puerto+ " en el navegador.")
});
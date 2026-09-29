const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const ARCHIVO = path.join(__dirname, '..', 'data', 'mensajes.json');
const TIPOS = ['desarrollo-web', 'aplicacion-movil', 'sistema', 'otro'];

function leerMensajes() {
  try {
    return JSON.parse(fs.readFileSync(ARCHIVO, 'utf-8'));
  } catch (err) {
    return []; // si el archivo no existe todavía
  }
}

// POST /contacto  -> guarda la solicitud de colaboración
router.post('/', (req, res) => {
  const { nombre, correo, tipoProyecto, mensaje } = req.body;

  if (!nombre || !correo || !tipoProyecto || !mensaje) {
    return res.status(400).json({ ok: false, mensaje: 'Por favor, completa todos los campos.' });
  }
  if (!/^\S+@\S+\.\S+$/.test(correo)) {
    return res.status(400).json({ ok: false, mensaje: 'El correo electrónico no es válido.' });
  }
  if (!TIPOS.includes(tipoProyecto)) {
    return res.status(400).json({ ok: false, mensaje: 'Tipo de proyecto no válido.' });
  }

  const mensajes = leerMensajes();
  mensajes.push({
    nombre: String(nombre).trim(),
    correo: String(correo).trim(),
    tipoProyecto,
    mensaje: String(mensaje).trim(),
    fecha: new Date().toISOString()
  });
  fs.writeFileSync(ARCHIVO, JSON.stringify(mensajes, null, 2));

  res.json({
    ok: true,
    mensaje: `¡Gracias, ${String(nombre).trim()}! Tu solicitud de colaboración fue registrada correctamente.`
  });
});

module.exports = router;

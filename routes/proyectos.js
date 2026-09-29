const express = require('express');
const proyectos = require('../data/proyectos');

const router = express.Router();

// GET /proyectos/reusa-app, /proyectos/simulador-paginas, etc.
router.get('/:slug', (req, res, next) => {
  const proyecto = proyectos.find((p) => p.slug === req.params.slug);
  if (!proyecto) return next(); // cae en el 404 de server.js

  res.render('proyecto', {
    titulo: `Proyecto ${proyecto.titulo}`,
    bodyClass: 'single is-preload',
    proyecto
  });
});

module.exports = router;

const express = require('express');
const proyectos = require('../data/proyectos');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Carlos Andre | Portafolio de Ingeniería de Sistemas',
    bodyClass: 'is-preload',
    proyectos
  });
});

module.exports = router;

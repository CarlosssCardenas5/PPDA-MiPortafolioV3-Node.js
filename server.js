const express = require('express');
const path = require('path');

const indexRoutes = require('./routes/index');
const proyectosRoutes = require('./routes/proyectos');
const contactoRoutes = require('./routes/contacto');

const app = express();
const PORT = process.env.PORT || 3000;

// Motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', indexRoutes);
app.use('/proyectos', proyectosRoutes);
app.use('/contacto', contactoRoutes);

// Página 404
app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Página no encontrada', bodyClass: 'single is-preload' });
});

app.listen(PORT, () => {
  console.log(`Portafolio corriendo en http://localhost:${PORT}`);
});

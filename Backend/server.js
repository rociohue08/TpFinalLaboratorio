
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./database");
const Servicio = require("./models/Servicio");
const Mensaje = require("./models/Mensaje");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// ---------------------------------Rutas CRUD para Servicios-------------------------

// OBTENER todos los servicios
app.get("/api/servicios", async (req, res) => {
  try {
    const servicios = await Servicio.findAll();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los servicios" });
  }
});

// CREAR un nuevo servicio
app.post("/api/servicios", async (req, res) => {
  const { nombre, precio, descripcion, imagen } = req.body;
  try {
    const nuevoServicio = await Servicio.create({
      nombre,
      precio,
      descripcion,
      imagen,
    });
    res.status(201).json(nuevoServicio);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el servicio" });
  }
});

// ACTUALIZAR un servicio existente
app.put("/api/servicios/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, descripcion, imagen } = req.body;
  try {
    const servicio = await Servicio.findByPk(id);
    if (servicio) {
      servicio.nombre = nombre;
      servicio.precio = precio;
      servicio.descripcion = descripcion;
      servicio.imagen = imagen;
      await servicio.save();
      res.json(servicio);
    } else {
      res.status(404).json({ error: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el servicio" });
  }
});

// ELIMINAR un servicio
app.delete("/api/servicios/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const servicio = await Servicio.findByPk(id);
    if (servicio) {
      await servicio.destroy();
      res.json({ message: "Servicio eliminado" });
    } else {
      res.status(404).json({ error: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el servicio" });
  }
});

//------------------------------------Rutas CRUD para Mensajes--------------------------

// CREAR mensaje
app.post("/api/mensajes", async (req, res) => {
  const { nombre, correo, consulta } = req.body;
  try {
    const nuevoMensaje = await Mensaje.create({ nombre, correo, consulta });
    res.json(nuevoMensaje);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el mensaje" });
  }
});

//OBTENER mensajes
app.get("/api/mensajes", async (req, res) => {
  try {
    const mensajes = await Mensaje.findAll();
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los mensajes" });
  }
});

// Verifico la conexión antes de sincronizar
sequelize.authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");

    // Sincronizar modelos con la base de datos
    sequelize.sync({ alter: true }) // 'alter: true' ajusta las tablas existentes sin perder datos
      .then(() => {
        console.log("Modelos sincronizados con la base de datos");

        // Arrancar el servidor después de la sincronización
        app.listen(PORT, () => {
          console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
      })
      .catch((error) => {
        console.error("Error al sincronizar los modelos:", error);
      });
  })
  .catch((error) => {
    console.error("Error de conexión a la base de datos:", error);
  });

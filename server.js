const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Servir los archivos de la carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Permitir recibir datos JSON
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta para el formulario de contacto
app.post("/api/contacto", (req, res) => {

    const { nombre, correo, mensaje } = req.body;

    if (!nombre || !correo || !mensaje) {
        return res.status(400).json({
            success: false,
            message: "Todos los campos son obligatorios."
        });
    }

    console.log("Nuevo mensaje recibido:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    res.json({
        success: true,
        message: "¡Gracias por contactarnos! Hemos recibido tu mensaje."
    });
});

// Iniciar servidor
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
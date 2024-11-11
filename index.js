//Importar la libreria  
const express = require('express');  

//Agrega  
const PORT = 3000;  

//Objetos para llamar los metodos de express  
const app = express();  

//Ruta de archivos estáticos  
app.use(express.static("public"));  

// escucha conexiones en el puerto 3000 y muestra por consola la direccion web.  
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
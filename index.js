const express = require('express');
const app = express();
const { create } = require('express-handlebars');

app.listen(3000, console.log('Servidor corriendo el http://localhost:3000/'));

app.use(express.static(__dirname + '/public'))
app.use("/bootstrapCss", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use('/bootstrapJs', express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
//app.use("/assets", express.static(__dirname + "/public/"));

app.set("view engine", "handlebars");
app.set("views", "./views");

// objeto de configuración hbs
const hbs = create({    

    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",

/*     helpers: {
        bienvenida: function () {
            return 'Bienvenido al mercado WEB, seleccione sus productos';
        },
        mayuscula: function (parametro) {
            return parametro.toUpperCase();
        }
    } */
})
// Se utiliza método engine para definir el objeto de configuración hbs
app.engine("handlebars", hbs.engine);

// Ruta raíz que contiene el arreglo con los productos
app.get("/", function (req, res) {
    res.render("Dashboard", {
        productos: ['Banana', 'Cebollas', 'Lechuga', 'Papas', 'Pimenton', 'Tomate'],
    });
})
const swaggerConfig = require("../configuration/swagger.config");
const usersRoutes = require("./user.routes");

class AppRouter {
    loadRoutes(app) {  
        // Ruta para swagger
        app.use('/api-docs', swaggerConfig.swaggerUi.serve, swaggerConfig.swaggerUi.setup(swaggerConfig.swaggerSpec));
        // Ruta para configuración del swagger
        app.use('/api-config', (res) => res.send(swaggerConfig.swaggerSpec));
        // Ruta para usuarios
        app.use('/users', usersRoutes);
    }
}
module.exports = AppRouter;

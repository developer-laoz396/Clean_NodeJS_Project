const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc"); // https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md
let swaggerSpec = swaggerJSDoc({
  swaggerDefinition: {
    info: {
      title: "swagger-express-jsdoc",
      version: "1.0.0",
      
    },
  },
  apis: ["./routes/*.js"],
});

module.exports.swaggerUi = swaggerUi;
module.exports.swaggerSpec = swaggerSpec;
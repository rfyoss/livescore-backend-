const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LiveScore API",
      version: "1.0.0"
    }
  },
  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec
};

import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express";

// Swagger definition
const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Hello World',
            version: '1.0',
            description: 'API for Proyecto Multas'
        },
    },
    apis: ['./src/routes/*.js', "./src/models/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

export const swaggerDocs = (app, port) => {
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

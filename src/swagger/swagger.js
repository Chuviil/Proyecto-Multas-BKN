import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express";

// Swagger definition
const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'API Multas UDLA',
            version: '1.0.2',
            description: 'API for Proyecto Multas'
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
    },
    apis: ['./src/routes/*.js', "./src/models/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

export const swaggerDocs = (app, port) => {
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

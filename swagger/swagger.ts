import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'to-do-API',
            version: '1.0.0',
            description: 'API for managing tasks',
            contact: {
                name: 'Alejo Filartiga'
            },
            servers: [
                {
                    url: 'https://to-do-api-kappa-ruby.vercel.app',
                    description: 'Development server'
                }
            ]
        }
    },
    apis: ['./routes/toDoRoutes.ts']
};

const specs = swaggerJsdoc(options);
export default specs;

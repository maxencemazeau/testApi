const fastify = require('fastify')({
    logger: true // Enable the default logger
  })
const cors = require('@fastify/cors')

fastify.register(cors, {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'], // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
  });
// Declare a route
fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
  })
  
  // Run the server!
  fastify.listen({ port: 8080, host: "0.0.0.0"}, (err, address) => {
    if (err) throw err
    console.log(`Server is running on ${address}`);
    // Server is now listening on ${address}
  })
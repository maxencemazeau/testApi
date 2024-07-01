const fastify = require('fastify')({
    logger: true // Enable the default logger
  })
// Declare a route
fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
  })
  
  // Run the server!
  fastify.listen({ port: 3001}, (err, address) => {
    if (err) throw err
    console.log(`Server is running on ${address}`);
    // Server is now listening on ${address}
  })
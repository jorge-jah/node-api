const fastify = require('fastify')({
    logger: false
  });

  const PORT = 5005

  fastify.get('/', (request, reply) => {
    reply.send('Servidor Rodando.' )
  });

  fastify.get('/produtos', (request, reply) => {
    reply.send('Servidor Rodando.\nTELA PRODUTOS\n' )
  });

  fastify.listen({ port: PORT }, (err, address) => {
    if (err) throw err

    // Server is now listening on ${address}
    console.log(`Server is now listening on ${address}`)
  })
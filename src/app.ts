import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify"

const server: FastifyInstance = Fastify({})

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          response: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/ping', opts, async (request, reply) => {

    return reply.send({ response: 'Hello Team' })
})

const start = async () => {
  try {
    server.listen({ port: 3000 }, () => {
      console.log("Go! in port 3000");
    })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
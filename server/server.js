import next from 'next'
import express from 'express'

const dev = 'dev'
const PORT = process.env.NODE_PORT || 3000
const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/home', (req, res) => {
      return app.render(req, res, '/home', req.query)
    })

    server.get('*', (req, res) => {
      return handler(req, res)
    })

    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on port ${PORT}`)
    })
  })
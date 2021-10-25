import http from 'http'
import express from 'express'
import config from './config/config'
import logging from './config/logging'
import { connect } from 'mongoose'

const NAMESPACE = 'Server'
const app = express()

/** Log the request */
app.use((req, res, next) => {
  /** Log the req */
  logging.info(
    NAMESPACE,
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  )

  res.on('finish', () => {
    /** Log the res */
    logging.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    )
  })

  next()
})

/** Parse the body of the request */
app.use(express.json())

/** Rules of API */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )

  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }

  next()
})

/** Routes go here */
// router.use('/api/books', bookRoutes);

/** Error handling */
app.use((req, res, next) => {
  const error = new Error('Not found')

  res.status(404).json({
    message: error.message
  })
})

const httpServer = http.createServer(app)

httpServer.listen(config.server.port, () =>
  logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`)
)

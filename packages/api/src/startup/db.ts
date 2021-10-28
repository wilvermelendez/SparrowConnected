import { connect } from 'mongoose'
import config from '../config/config'
import logging from '../config/logging'
const NAMESPACE = 'Server'

export const connectToDb = async () => {
  /** Connect to Mongo */
  try {
    await connect(config.mongo.url, config.mongo.options)
    logging.info(NAMESPACE, 'Mongo Connected')
  } catch (error) {
    logging.error(NAMESPACE, `'Error connecting mongoDB' ${error.message}`, error)
  }
}

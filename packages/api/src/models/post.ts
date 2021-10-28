import mongoose, { Schema } from 'mongoose'
import logging from '../config/logging'
import { IPost } from 'sparrow-connected-shared'

const PostSchema: Schema = new Schema({
  title: { type: String, require: true },
  summary: { type: String, require: true },
  body: { type: String, require: true },
  author: { type: String, require: true },
  publishedUser: {
    type: { name: String, lastName: String, image: { data: Buffer, contentType: String } },
    require: true
  },
  publicationDate: { type: Date, default: Date.now, require: true },
  expirationDate: { type: Date, require: true },
  lastModifyDate: { type: Date, require: true },
  topics: { type: [String], require: true },
  postType: { type: Number, require: true },
  language: { type: { language: String, langCode: String } },
  headImage: { type: { data: Buffer, contentType: String } }
})

PostSchema.post<IPost>('save', function () {
  logging.info('Mongo', 'Checkout the Post we just saved: ', this)
})

export default mongoose.model<IPost>('Post', PostSchema)

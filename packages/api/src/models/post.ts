import mongoose, { Schema } from 'mongoose'
import logging from '../config/logging'
import { IPost, PostTypes } from 'sparrow-connected-shared'
import { Joi } from 'Joi'

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
  postType: { type: String, require: true },
  language: { type: { language: String, langCode: String } },
  headImage: { type: { data: Buffer, contentType: String } }
})

PostSchema.post<IPost>('save', function () {
  logging.info('Mongo', 'Checkout the Post we just saved: ', this)
})

export const validatePost = (Post: IPost) => {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    summary: Joi.string().min(25).max(250).required(),
    body: Joi.string().min(25).required(),
    author: Joi.string().min(25).max(250).required(),
    postType: Joi.string().valid(...Object.values(PostTypes))
  }

  return Joi.validate(Post, schema)
}
export default mongoose.model<IPost>('Post', PostSchema)

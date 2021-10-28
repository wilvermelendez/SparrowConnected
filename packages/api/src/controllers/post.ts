import Post from '../models/post'
import { StatusCodes } from 'http-status-codes'
import { Request, Response } from 'express'

export const getAllPost = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find()
    return res.status(StatusCodes.OK).json({
      posts: posts,
      count: posts.length
    })
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error.message)
  }
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const newPost = new Post({
      title: 'test',
      summary: 'test',
      body: 'test',
      publishedUser: 'test',
      author: 'test',
      userPublisher: 'test',
      publicationDate: Date.now(),
      expirationDate: Date.now(),
      lastModifyDate: Date.now(),
      topics: 'test',
      postType: 0
    })
    const post = await newPost.save()
    return res.status(StatusCodes.OK).json({ post: post })
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error.message)
  }
}

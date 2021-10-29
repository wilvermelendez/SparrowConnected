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
    // const { error } = validatePost(req.body)
    // if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message)

    const newPost = new Post({
      title: req.body.title,
      summary: req.body.summary,
      body: req.body.body,
      author: req.body.author,
      publishedUser: req.body.publishedUser,
      publicationDate: Date.now(),
      expirationDate: Date.now(),
      lastModifyDate: Date.now(),
      topics: req.body.topics,
      postType: req.body.postType,
      headImage: req.body?.headImage ?? null
    })
    const post = await newPost.save()
    return res.status(StatusCodes.OK).json({ post: post })
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error.message)
  }
}

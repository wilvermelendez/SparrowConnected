import express from 'express'
import { createPost, getAllPost } from '../controllers/post'

const router = express.Router()

router.post('/post', createPost)
router.get('/post', getAllPost)

export = router

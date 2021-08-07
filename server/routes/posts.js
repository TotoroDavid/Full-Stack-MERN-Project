import express from 'express'
//controllers 
import { getPosts, createPost } from '../controllers/posts.js'
const router = express.Router()

//localhost:5000/post . . .
router.get('/', getPosts)
router.post('/', createPost)

export default router
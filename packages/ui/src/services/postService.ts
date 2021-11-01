import axios from 'axios'
import { PostTable } from '../interfaces/PostTable'
import { IPost } from 'sparrow-connected-shared'
export const getPosts = async (): Promise<PostTable[]> => {
  try {
    const result = await axios.get('http://localhost:1221/api/post')
    return result.data.posts
  } catch (error) {
    console.log('Error', error.message)
  }
}

export const CreatePosts = async (post): Promise<PostTable> => {
  try {
    const result = await axios.post('http://localhost:1221/api/post', post)
    return result.data.post
  } catch (error) {
    console.log('Error', error.message)
  }
}

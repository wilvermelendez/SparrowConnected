import axios from 'axios'
import { PostTable } from '../interfaces/PostTable'

export const getPosts = async (): Promise<PostTable[]> => {
  const result = await axios.get('http://localhost:1221/api/post')
  console.log('result', result.data.posts)
  return result.data.posts
}

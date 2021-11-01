import create from 'zustand'
import { PostTable } from '../interfaces/PostTable'
import { getPosts } from '../services/postService'

type State = {
  posts: PostTable[]
  usersLoading: boolean
  fetch: () => Promise<void>
}

const usePostStore = create<State>((set, get) => ({
  posts: [],
  usersLoading: true,

  fetch: async (): Promise<void> => {
    try {
      set({ usersLoading: true })

      const posts = await getPosts()
      set({
        posts: posts
      })

      set({ usersLoading: false })
    } catch (err) {
      set({ usersLoading: false })
    }
  }
}))

export default usePostStore

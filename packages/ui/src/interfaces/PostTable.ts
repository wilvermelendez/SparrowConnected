import { PostTypes } from 'sparrow-connected-shared'

export interface PostTable {
  __id: string
  title: string
  postType: PostTypes
  lastModifyDate: Date
  publicationDate: Date
  expirationDate: Date
  author: string
  topics: string[]
}

import { PostTypes } from "../enums/PostTypes";

export interface IPost {
  title: string;
  summary: string;
  body: string;
  author: string;
  publishedUser: {
    name: String;
    lastName: String;
    image: { data: Buffer; contentType: String };
  };
  publicationDate: Date;
  expirationDate: Date;
  lastModifyDate: Date;
  topics: string[];
  postType: PostTypes;
  headImage: {
    data: Buffer;
    contentType: String;
  };
}

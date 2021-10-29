export interface IPublishedUser {
  name: String;
  lastName: String;
  image: { data: Buffer; contentType: String };
}

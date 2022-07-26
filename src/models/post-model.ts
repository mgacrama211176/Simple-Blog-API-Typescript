//imports
import { Schema, model, Types } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
// Post schema
export interface IPost {
  title: string;
  description: string;
  photo: Object;
  username: string;
  category: string;
}

// 2. Create a Schema corresponding to the document interface.
const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: Object },
  username: { type: String, required: true },
  category: { type: String },
});

// 3. Create a Model.

const Post = model<IPost>("Post", postSchema);

export default Post;

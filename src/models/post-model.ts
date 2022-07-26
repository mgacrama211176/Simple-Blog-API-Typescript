//imports
import { Schema, model, Types } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
// Post schema
export interface IPost {
  title: string;
  description: string;
  photo: string;
  username: string;
  category: Types.Array<string>;
}

// 2. Create a Schema corresponding to the document interface.
const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String },
  username: { type: String, required: true },
  category: [{ type: Array }],
});

// 3. Create a Model.

const Post = model<IPost>("Post", postSchema);

export default Post;

//imports
import { Schema, model, connect, Types } from 'mongoose';

// User schema
export interface IPost {
  title: string;
  description: string;
  photo: string;
  username: string;
  category: Types.Array<string>;

  id: number;
  name: string;
  email: string;
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String },
  username: { type: String, required: true },
  category: [{ type: Array }],
});

const Post = model<IPost>('Post', postSchema);

/**
 * Get a new User object.
 *
 * @returns
 */
// function getNew(name: string, email: string): IUser {
//   return {
//     id: -1,
//     email,
//     name,
//   };
// }

/**
 * Copy a user object.
 *
//  * @param user
//  * @returns
//  */
// function copy(user: IUser): IUser {
//   return {
//     id: user.id,
//     email: user.email,
//     name: user.name,
//   };
// }

// // Export default
// export default {
//   new: getNew,
//   copy,
// };

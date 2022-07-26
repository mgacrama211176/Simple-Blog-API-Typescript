import { IPost } from '@models/post-model';
import orm from './mock-orm';

/**
 * Get one title.
 *
 * @param title
 * @returns
 */
// async function getOne(title: string): Promise<IPost | null> {
//   const db = await orm.openDb();
//   for (const username of db.users) {
//     if (username.title === title) {
//       return username;
//     }
//   }
//   return null;
// }

/**
 * See if a Post with the given id exists.
 *
 * @param id
 */
// async function persists(id: number): Promise<boolean> {
//   const db = await orm.openDb();
//   for (const id of db.id) {
//     if (id === id) {
//       return true;
//     }
//   }
//   return false;
// }

/**
 * Get all posts.
 *
 * @returns
 */
// async function getAll(): Promise<IPost[]> {
//   const db = await orm.openDb();
//   return db.title;
// }

/**
 * Add one post.
 *
 * @param username
 * @returns
 */
async function add(username: IPost): Promise<void> {
  const db = await orm.openDb();
  db.username.push(username);
  return orm.saveDb(db);
}

const addPost = async (username: IPost) => {
  const database = await orm.openDb();
  database.push(username);
  try {
  } catch (err) {
    console.log(err);
  }
};

/**
 * Update a Post.
 *
 * @param id
 * @returns
 */
// async function update(id: IPost): Promise<void> {
//   const db = await orm.openDb();
//   for (let i = 0; i < db.id.length; i++) {
//     if (db.id[i] === id) {
//       db.id[i] = id;
//       return orm.saveDb(db);
//     }
//   }
// }

/**
 * Delete one user.
 *
 * @param id
 * @returns
 */
// async function deleteOne(id: number): Promise<void> {
//   const db = await orm.openDb();
//   for (let i = 0; i < db.users.length; i++) {
//     if (db.users[i].id === id) {
//       db.users.splice(i, 1);
//       return orm.saveDb(db);
//     }
//   }
// }

// Export default
export default {
  //   getOne,
  //   persists,
  //   getAll,
  add,
  //   update,
  //   delete: deleteOne,
} as const;

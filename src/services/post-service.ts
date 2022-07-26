import postRepo from '@repos/post-repo';
import { IPost } from '@models/post-model';
import { UserNotFoundError } from '@shared/errors';

/**
 * Get all users.
 *
 * @returns
 */
// function getAll(): Promise<IPost[]> {
//   return postRepo.getAll();
// }

/**
 * Add one post.
 *
 * @param username
 * @returns
 */
function addOne(title: IPost): Promise<void> {
  return postRepo.add(title);
}

/**
 * Update one post.
 *
 * @param id
 * @returns
 */
// async function updateOne(id: IPost): Promise<void> {
//   const persists = await postRepo.persists(id);
//   if (!persists) {
//     throw new UserNotFoundError();
//   }
//   return postRepo.update(id);
// }

/**
 * Delete a user by their id.
 *
 * @param id
 * @returns
 */
// async function deleteOne(id: number): Promise<void> {
//   const persists = await postRepo.persists(id);
//   if (!persists) {
//     throw new UserNotFoundError();
//   }
//   return postRepo.delete(id);
// }

// Export default
export default {
  // getAll,
  addOne,
  // updateOne,
  // delete: deleteOne,
} as const;

// import StatusCodes from 'http-status-codes';
import { Request, Response, Router, NextFunction } from 'express';
// import mongoose from 'mongoose';

// import postService from '@services/post-service';
// import { ParamMissingError } from '@shared/errors';

//model
import Post from '../models/post-model';

// Constants
const router = Router();
// const { CREATED, OK } = StatusCodes;

// Paths
// export const p = {
//   get: '/all',
//   add: '/add',
//   update: '/update',
//   delete: '/delete/:id',
// } as const;

/**
 * Get all users.
 */
// router.get(p.get, async (_: Request, res: Response) => {
//   const users = await userService.getAll();
//   return res.status(OK).json({ users });
// });

/**
 * Add one post.
 */
// router.post(p.add, async (req: Request, res: Response) => {
//   const { user } = req.body;
//   // Check param
//   if (!user) {
//     throw new ParamMissingError();
//   }
//   // Fetch data
//   await postService.addOne(user);
//   return res.status(CREATED).end();
// });

router.post(
  '/post/add',
  async (request: Request, response: Response, next: NextFunction) => {
    const { title, description, photo, username, category } = request.body;

    const post = new Post({
      title,
      description,
      photo,
      username,
      category,
    });

    try {
      const savePost = await post.save();
      console.log(savePost);
      response.status(200).json({ message: `Post added` });
    } catch (err) {
      response.status(500).json({ message: `error` });
    }
  }
);

/**
 * Update one user.
 */
// router.put(p.update, async (req: Request, res: Response) => {
//   const { user } = req.body;
//   // Check param
//   if (!user) {
//     throw new ParamMissingError();
//   }
//   // Fetch data
//   await userService.updateOne(user);
//   return res.status(OK).end();
// });

/**
 * Delete one user.
 */
// router.delete(p.delete, async (req: Request, res: Response) => {
//   const { id } = req.params;
//   // Check param
//   if (!id) {
//     throw new ParamMissingError();
//   }
//   // Fetch data
//   await userService.delete(Number(id));
//   return res.status(OK).end();
// });

// Export default
export default router;

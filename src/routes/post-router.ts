// import StatusCodes from 'http-status-codes';
import { Request, Response, Router, NextFunction } from "express";

//model
import Post from "../models/post-model";

// Constants
const router = Router();

//GETTING ALL POSTS
router.get(
  "/allPosts",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const getAllPosts = await Post.find({});
      response.status(200).json({ getAllPosts });
    } catch (err) {
      console.log(err);
    }
  }
);

//GETTING POST DEPENDING ON THE ID
router.get(
  "/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const getPost = await Post.findById(request.params.id);
      response.status(200).json(getPost);
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

//ADDING OF POST
router.post(
  "/add",
  async (request: Request, response: Response, next: NextFunction) => {
    const { title, description, photo, username, category } = request.body;

    const addPost = new Post({
      title,
      description,
      photo,
      username,
      category,
    });

    try {
      const savePost = await addPost.save();
      console.log(savePost);
      response.status(200).json({ message: `Post added` });
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

//UPDATING POST
//localhost:3000/api/posts/update/:id

router.put(
  "/update/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const post = await Post.findById(request.params.id);
      try {
        const updatePost = await Post.findByIdAndUpdate(
          request.params.id,
          {
            $set: request.body,
          },
          { new: true }
        );
        response.status(200).json({ message: "Post Updated" });
      } catch (err) {
        response.status(500).json(err);
      }
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

//DELETING OF POST BASED ON THE OBJECT ID

router.delete(
  "/delete/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const post = await Post.findByIdAndDelete(request.params.id);
      response.status(200).json({ message: `Post Deleted` });
    } catch (err) {
      response.status(500).json(err);
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

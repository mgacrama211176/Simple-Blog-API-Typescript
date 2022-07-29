// import StatusCodes from 'http-status-codes';
import { Request, Response, Router, NextFunction } from 'express';
import multer from 'multer';

//model
import Post from '../models/post-model';

// Constants
const router = Router();

//Store of images
const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, 'images');
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//GETTING ALL POSTS
router.get(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const getAllPosts = await Post.find({});
      response.status(200).json({ getAllPosts });
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

//GETTING POST DEPENDING ON THE ID
router.get(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const getPost = await Post.findById(request.params.id);
      response.status(200).json(getPost);
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

//GETTING POST DEPENDING ON THE CATEGORY
router.get(
  '/category/:category',
  async (request: Request, response: Response, next: NextFunction) => {
    const category = request.params.category;
    console.log(category);
    try {
      const findProduct = await Post.find({
        // aggregation
        category: { $regex: category, $options: 'i' },
      });
      response.status(200).json(findProduct);
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

//ADDING OF POST
router.post(
  '/',
  upload.single('photo'),
  async (request: Request, response: Response, next: NextFunction) => {
    const addPost = new Post({
      title: request.body.title,
      description: request.body.description,
      photo: request.file,
      username: request.body.username,
      category: request.body.category,
    });
    try {
      const savePost = await addPost.save();
      response.status(201).json({ message: `Post added` });
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

//UPDATING POST
router.put(
  '/:id',
  upload.single('photo'),
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const post = await Post.findById(request.params.id);
      try {
        const updatePost = await Post.findByIdAndUpdate(
          request.params.id,
          {
            $set: request.body,
            photo: request.file,
          },
          { new: true }
        );
        response.status(200).json({ message: 'Post Updated' });
      } catch (err) {
        response.status(405).json(err);
      }
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

//DELETING OF POST BASED ON THE OBJECT ID

router.delete(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const post = await Post.findByIdAndDelete(request.params.id);
      response.status(200).json({ message: `Post Deleted` });
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

export default router;

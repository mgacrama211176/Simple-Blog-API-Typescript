import { Router } from "express";
import postRouter from "./post-router";

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use("/posts", postRouter);

// Export default.
export default baseRouter;

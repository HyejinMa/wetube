import express from "express";
import { registerView, createComment } from "../controllers/videoController.js";

const apiRouter = express.Router();

// 프론트엔드에서 자바스크립트로 호출하는 URL
apiRouter.post("/videos/:id([0-9a-f]{24})/view", registerView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment);

export default apiRouter;

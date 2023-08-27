import express from 'express';
import * as lessonController from '../controllers/lessonController.js';

const router = express.Router();

router.route("/").post(lessonController.createLesson);

export default router;
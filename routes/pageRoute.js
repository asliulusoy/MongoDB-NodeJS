import express from 'express';
import * as pageController from '../controllers/pageController.js';
import * as auth from '../middlewares/auth.js';

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/student").get(auth.authenticateToken, pageController.getStudentPage);
router.route("/instructor").get(auth.authenticateToken, pageController.getInstructorPage);
router.route("/signup").get(pageController.getSignupPage);
router.route("/login").get(pageController.getLoginPage);

export default router;
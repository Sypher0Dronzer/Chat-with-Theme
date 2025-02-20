import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js';
import { getUserForSlidebar } from '../controllers/user.controller.js';

const router= express.Router();

router.get('/',protectRoute,getUserForSlidebar)

export default router
import express from 'express' 
//note check the file end with the .js otherwise you will get the error
import { postJob, register } from '../controllers/auth.controller.js';

//NOTE separate router creation for the authencation module

import upload from '../middleware/upload.js'
import { verifyToken } from '../middleware/verify.js';
const router = express.Router();
import checkRole from '../middleware/checkRole.js';
router.post('/register', upload.single('resume') ,register) ;

router.post('/job',verifyToken , checkRole('recruiter'),postJob)

export default router ;
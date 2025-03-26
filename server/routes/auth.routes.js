import express from 'express' 
//note check the file end with the .js otherwise you will get the error
import { register } from '../controllers/auth.controller.js';

//NOTE separate router creation for the authencation module

import upload from '../middleware/upload.js'
const router = express.Router();

router.post('/register', upload.single('resume') ,register) ;

export default router ;
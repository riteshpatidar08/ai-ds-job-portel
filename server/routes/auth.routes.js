import express from 'express' 
//note check the file end with the .js otherwise you will get the error
import { register } from '../controllers/auth.controller.js';

//NOTE separate router creation for the authencation module
const router = express.Router();

router.post('/register',register) ;

export default router ;
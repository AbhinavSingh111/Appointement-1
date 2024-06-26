import express from "express";
import { 
   
   updateUser,
    deleteUser,
     getAllUser,
      getSingleUser ,
   } from "../Controllers/userController.js";
import {authenticate,restrict} from "../auth/verifyToken.js";


const router = express.Router()
router.get('/:id',authenticate ,restrict(["patient"]) ,getSingleUser);
router.put('/:id',authenticate ,restrict(["patient"]) , updateUser);
router.delete('/:id',authenticate ,restrict(["patient"]) ,  deleteUser);
router.get('/', authenticate ,restrict(["admin"]) , getAllUser);
export default router;
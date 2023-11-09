import { Router } from "express";
import { UsersController } from "../controllers/UsersController";

const router = Router();

const { getUsers, login } = new UsersController();

router.get('/users/get-users', getUsers);
router.post('/auth/login', login);

export default router;
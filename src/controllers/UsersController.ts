import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
/** Entities */
import { User } from "../models/User";

export class UsersController {
    userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async getUsers(req: Request, res: Response) {
        const users = await this.userRepository.find();
        res.status(200).json({
            transaction: {status: true},
            message: {type: 'success', content: 'Done.', code: 200},
            data: users
        })
    }

    async login(req: Request, res: Response) {
        res.status(200).json({
            transaction: {status: true},
            message: {type: 'success', content: 'Done.', code: 200},
            data: {token: "", user: ""}
        })
    }
}
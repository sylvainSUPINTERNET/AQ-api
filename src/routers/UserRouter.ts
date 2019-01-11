'use strict';

import { Router, Request, Response } from 'express';
import { UserCtrl } from '../controllers/UserController';
const router: Router = Router();

router.get('/', UserCtrl.getUsersAsync ,(req: Request, res: Response) => {
    res.status(200).json({todo: "setter les users dans req.api.users pour les retrieve ici (issu du middleare)"})
});

export default router;
import express from 'express';
const router = express.Router();

import authRouter from '../app/routers/authRouter.js'
import chatRouter from '../app/routers/chatRouter.js'

const apiRoutes = [
    {
        path: '/auth',
        route: authRouter,
    },
    {
        path: '/chat',
        route: chatRouter,
    },
];

apiRoutes.forEach(route => router.use(route.path, route.route));
export default router;
import express from 'express';
import WebController from '../controllers/web.controller.js';

const router = express.Router();


router.get('/dashboard',
 WebController.listarLivrosPage
);


export default router;
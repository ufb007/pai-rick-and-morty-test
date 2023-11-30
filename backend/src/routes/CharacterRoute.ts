import { Router } from 'express';
import Character from '@controllers/CharacterController';

const router = Router();

const character = new Character();

router.get('/get-all-morty', character.getAllMortys)

export default router

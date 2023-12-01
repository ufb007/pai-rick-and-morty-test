import { Router } from 'express';
import Character from '@controllers/CharacterController';

const router = Router();

const character = new Character();

// Returns all alive mortys
router.get('/get-characters/', character.getCharacters)

// Returns characters based on params name and status
router.get('/get-characters/:name/:status', character.getCharacters)

// Returns a single character from id param
router.get('/get-single-character/:id', character.getSingleCharacter)

export default router

import { Request, Response } from "express"
import CharacterService from "@services/CharacterService"

export default class Character {
    public async getAllMortys(req: Request, res: Response) {
        const characters = await CharacterService.getAllMortys('morty', 'alive');

        return res.json({ characters: characters });
    }
}
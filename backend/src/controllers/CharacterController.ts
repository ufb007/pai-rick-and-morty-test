import { Request, Response } from "express"
import CharacterService from "@services/CharacterService"

class Character {
    constructor() {}

    public async getAllMortys(req: Request, res: Response) {
        CharacterService.getAllMortys('morty', 'alive')
        return res.json({ message: 'From Character controller get all morty' })
    }
}

export default Character
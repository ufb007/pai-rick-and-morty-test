import { Request, Response } from "express"
import CharacterService from "@services/CharacterService"

type ParamsType = {
    name: string,
    status: 'alive' | 'dead' | 'unknown'
}

export default class Character {
    public async getCharacters(req: Request<ParamsType>, res: Response) {
        const { name, status }: ParamsType = { 
            name: req.params.name ?? 'morty',
            status: req.params.status ?? 'alive'
        }

        const characters = await CharacterService.getCharacters(name, status);

        return res.json({ characters: characters });
    }
}
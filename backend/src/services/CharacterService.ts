import axios from "@utils/axios"
import RickAndMortyAPI from "@interfaces/rick-and-morty-api";
import CharacterAPI from "@interfaces/character-api";
import CharacterDTO from "@models/ChracterDTO";

// todo possible create character enum for alive | dead | unknown

class CharacterService {
    public static getAllMortys = async (name: string, status: 'alive' | 'dead' | 'unknown'): Promise<CharacterAPI.ICharacter[]> => {
        const characters = await axios(`/character/?name=${name}&status=${status}`);
        const locationIds: number[] = []

        //Get characters core data and 
        const aggregatedCharacters = await characters.data.results.map((character: RickAndMortyAPI.ICharacterCore) => {
            const locationId = Number(character.location.url.substring(character.location.url.lastIndexOf('/') + 1));

            if (!locationIds.includes(locationId)) {
                locationIds.push(locationId);
            }

            return CharacterDTO.characterCore(character)
        });

        const locations = await axios(`/location/${locationIds.join(",")}`);

        console.log(locations)
        return characters.data
    }
}

export default CharacterService
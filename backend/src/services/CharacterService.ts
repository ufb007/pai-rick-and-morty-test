import axios from "@utils/axios"
import RickAndMortyAPI from "@interfaces/rick-and-morty-api";
import CharacterAPI from "@interfaces/character-api";
import CharacterDTO from "@models/ChracterDTO";

// todo possible create character enum for alive | dead | unknown

class CharacterService {
    public static getAllMortys = async (name: string, status: 'alive' | 'dead' | 'unknown'): Promise<CharacterAPI.ICharacter[]> => {
        // Make request for characters with the name and status defined
        const characters = await axios(`/character/?name=${name}&status=${status}`);
        
        const locationIdsForCharacters: {id: number, locationId: number}[] = [];
        const locationIds: number[] = [];
        const episodeIds: number[] = [];
        const aggregatedCharacters: any[] = []

        // Get characters core data from  
        characters.data.results.map((character: RickAndMortyAPI.ICharacterCore): void => {
            const locationId = Number(character.location.url.substring(character.location.url.lastIndexOf('/') + 1));

            if (!locationIds.includes(locationId)) {
                locationIds.push(locationId);
            }

            locationIdsForCharacters.push({id: character.id, locationId})

            aggregatedCharacters.push(CharacterDTO.characterCore(character));
        });

        // Get multiple locations from one request example: https://rickandmortyapi.com/api/location/3,21
        const locations = await axios(`/location/${locationIds.join(",")}`);

        aggregatedCharacters.map((character: CharacterAPI.ICharacterCore & CharacterAPI.ICharacter) => {
            const locationId = locationIdsForCharacters.find(({ id }) => id === character.id)?.locationId;
            const location = locations.data.find(({ id }: RickAndMortyAPI.ILocationDetail) => id === locationId);

            character.location = CharacterDTO.location(location)
        })

        console.log(aggregatedCharacters)

        //locationIdsForCharacters.map((character) => {
            
        //})

        // const aggregatedLocations = locations.data.map((location: RickAndMortyAPI.ILocation) => {

        // })

        //console.log(locations)
        //console.log('Characters count - ', locationIdsForCharacters)
        return characters.data
    }
}

export default CharacterService
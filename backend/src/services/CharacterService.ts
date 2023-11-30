import axios from "@utils/axios"
import RickAndMortyAPI from "@interfaces/rick-and-morty-api";
import CharacterAPI from "@interfaces/character-api";
import CharacterDTO from "@models/ChracterDTO";

// todo possible create character enum for alive | dead | unknown

export default class CharacterService {
    public static getAllMortys = async (name: string, status: 'alive' | 'dead' | 'unknown'): Promise<CharacterAPI.ICharacter[]> => {
        // Make request for characters with the name and status defined
        const characters = await axios(`/character/?name=${name}&status=${status}`);

        const locationIdsForCharacters: {id: number, locationId: number}[] = [];
        const locationIds: number[] = [];

        const episodeIdsForCharacters:  {id: number, episodeId: number}[] = [];
        const episodeIds: number[] = [];

        const aggregatedCharacters: any[] = [];

        // Get characters core data from  
        characters.data.results.map((character: RickAndMortyAPI.ICharacterCore): void => {
            const { location, episode } = character;

            const locationId = Number(location.url.substring(location.url.lastIndexOf('/') + 1));

            if (!locationIds.includes(locationId)) {
                locationIds.push(locationId);
            }

            locationIdsForCharacters.push({ id: character.id, locationId });

            episode.map((episode: string) => {
                const episodeId = Number(episode.substring(episode.lastIndexOf('/') + 1));

                if (!episodeIds.includes(episodeId)) {
                    episodeIds.push(episodeId)
                }

                episodeIdsForCharacters.push({ id: character.id, episodeId });
            });

            aggregatedCharacters.push(CharacterDTO.characterCore(character));
        });

        // Get multiple locations from one request example: https://rickandmortyapi.com/api/location/3,21
        const locations = await axios(`/location/${locationIds.join(",")}`);

        // Get multiple episodes from one request example: https://rickandmortyapi.com/api/episode/3,21
        const episodes = await axios(`/episode/${episodeIds.join(",")}`);

        // Finally time to combine locations & episodes into one
        aggregatedCharacters.map((character: CharacterAPI.ICharacterCore & CharacterAPI.ICharacter): void => {
            const locationId = locationIdsForCharacters.find(({ id }) => id === character.id)?.locationId;
            const location = locations.data.find(({ id }: RickAndMortyAPI.ILocationDetail) => id === locationId);

            character.location = CharacterDTO.location(location);

            const eps: CharacterAPI.IEpisode[] = []
            
            episodeIdsForCharacters.filter(({ id, episodeId }) => {
                if (id === character.id) {
                    eps.push(CharacterDTO.episode(episodes.data.find(({ id }: RickAndMortyAPI.IEpisodeDetail) => id === episodeId)))
                }
            });

            character.episodes = eps;
        });

        return aggregatedCharacters;
    }
}
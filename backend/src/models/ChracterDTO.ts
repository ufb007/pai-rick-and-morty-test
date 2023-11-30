import CharacterAPI from "@interfaces/character-api";
import RickAndMortyAPI from "@interfaces/rick-and-morty-api";

class CharacterDTO {
    public static characterCore(character: RickAndMortyAPI.ICharacterCore): CharacterAPI.ICharacterCore {
        const {
            id,
            name,
            status,
            species,
            gender,
            image
        } = character;

        return { id, name, status, species, gender, avatar: image }
    }

    public static location(location: RickAndMortyAPI.ILocationDetail): CharacterAPI.ILocation {
        const { id, name, dimension, type, residents } = location;

        return { id, name, type, dimension, noOfResidents: residents.length }
    }

    public static episode(ep: RickAndMortyAPI.IEpisodeDetail): CharacterAPI.IEpisode {
        const { id, name, air_date, episode, characters } = ep;

        return { id, name, airDate: air_date, episode, noOfCharacters: characters.length }
    }
}

export default CharacterDTO
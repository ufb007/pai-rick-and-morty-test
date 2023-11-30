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
            image,
            location
        } = character;

        return { id, name, status, species, gender, avatar: image }
    }

    public static location(location: RickAndMortyAPI.ILocationDetail): CharacterAPI.ILocation {
        const { id, name, dimension, type, residents } = location;

        return { id, name, type, dimension, noOfResidents: residents.length }
    }
}

export default CharacterDTO
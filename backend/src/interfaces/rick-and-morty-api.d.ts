declare namespace RickAndMortyAPI {
    interface ICharacterCore {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: ILocation;
        location: ILocation;
        image: string;
        episode: string[];
        created: string;
    }

    interface ILocation {
        name: string;
        url: string;
    }

    interface ILocationDetail {
        id: number;
        name: string;
        type: string;
        dimension: string;
        residents: []
    }

    interface IEpisodeDetail {
        id: number;
        name: string;
        air_date: string;
        episode: string;
        characters: [];
        url: string;
        created: string;
    }
}

export default RickAndMortyAPI
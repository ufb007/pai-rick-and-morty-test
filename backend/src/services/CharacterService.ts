import axios from "@utils/axios"
import RickAndMortyAPI from "@interfaces/rick-and-morty-api";
import CharacterAPI from "@interfaces/character-api";
import CharacterDTO from "@models/ChracterDTO";
import { AxiosResponse } from "axios";
import { response } from "express";

// todo possible create character enum for alive | dead | unknown

type CharacterInfoType = {
    count: number,
    pages: number,
    next: string | null;
}

type RickAndMortyResponseType = {
    info: CharacterInfoType,
    results: RickAndMortyAPI.ICharacterCore[]
}

type RickAndMortySingleCharacterResponseType = {
    data: RickAndMortyAPI.ICharacterCore
}

type ErrorResponseType = {
    message: string
}

export default class CharacterService {
    public static getCharacters = async (name: string, status: 'alive' | 'dead' | 'unknown'): Promise<CharacterAPI.ICharacter[] | ErrorResponseType> => {
        try {
            // Make request for characters with the name and status defined
            const characters: RickAndMortyAPI.ICharacterCore[] = [];
            let characterInfo: CharacterInfoType = { count: 0, pages: 1, next: '' }
            let page: number = 0

            // Loop through however many pages exist
            while (characterInfo.next !== null) {
                page++;

                await axios(`/character/?page=${page}&name=${name}&status=${status}`)
                    .then(({ data: { info, results } }: AxiosResponse<RickAndMortyResponseType>): void => {
                        characterInfo = info;
                        characters.push(...results)
                    })
            }

            const locationIdsForCharacters: {id: number, locationId: number}[] = [];
            const locationIds: number[] = [];

            const episodeIdsForCharacters:  {id: number, episodeId: number}[] = [];
            const episodeIds: number[] = [];

            const aggregatedCharacters: any[] = [];

            // Get characters core data from  
            characters.map((character: RickAndMortyAPI.ICharacterCore): void => {
                const { location, episode } = character;

                const locationId = Number(location.url.substring(location.url.lastIndexOf('/') + 1));

                // Avoiding duplicates
                if (!locationIds.includes(locationId)) {
                    locationIds.push(locationId);
                }

                locationIdsForCharacters.push({ id: character.id, locationId });

                episode.map((episode: string) => {
                    const episodeId = Number(episode.substring(episode.lastIndexOf('/') + 1));

                    // Avoiding duplicates
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
        } catch (error: any) {
            return { message: error.response.data.error }
        }
    }

    public static getSingleCharacter = async (id: number) => {
        try {
            const character = await axios(`/character/${id}`)
                .then((response: AxiosResponse<RickAndMortyAPI.ICharacterCore>) => response.data)

            const { location, episode } = character;
            const locationId = Number(location.url.substring(location.url.lastIndexOf('/') + 1))
            const getLocation = await axios(`/location/${locationId}`).then((response: AxiosResponse<RickAndMortyAPI.ILocationDetail>) => response.data);

            const episodeIds: number[] = [];

            character.episode.map((episode: string) => {
                const episodeId = Number(episode.substring(episode.lastIndexOf('/') + 1));
                episodeIds.push(episodeId);
            });

            let getEpisodes = await axios(`/episode/${episodeIds.join(",")}`).then((response: AxiosResponse<RickAndMortyAPI.IEpisodeDetail[]>) => response.data);

            if (!Array.isArray(getEpisodes)) {
                getEpisodes = [getEpisodes]
            }

            const episodes = getEpisodes.map((episode) => CharacterDTO.episode(episode))

            const aggregatedCharacter: CharacterAPI.ICharacter = {
                ...CharacterDTO.characterCore(character),
                origin: CharacterDTO.location(getLocation),
                location: CharacterDTO.location(getLocation),
                episodes: episodes
            };
            
            return aggregatedCharacter
        } catch (error: any) {
            return { message: error.response.data.error }
        }
    }
}
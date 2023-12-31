import React from "react"
import { CharacterContainer, AvatarImg } from "./Character.styled"
import CharacterButton from "@/components/characters/CharacterButton"

const CharacterCard = ({ id, name, gender, species, avatar }: LickApi.ICharacterCore) => {
    return (
        <CharacterContainer className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 px-10 md:px-5 text-white flex flex-col mb-10 md:mb-[100px] cursor-pointer">
            <AvatarImg src={avatar} className="w-full" />
            <ul className="mt-3 flex flex-col gap-2 mb-7 flex-grow text-lg md:text-sm">
                <li>Name: { name }</li>
                <li>Gender: { gender }</li>
                <li>Species: { species }</li>
            </ul>
            <CharacterButton title="View Profile" link={`/character/${id}`} />
        </CharacterContainer>
    )
}

export default CharacterCard
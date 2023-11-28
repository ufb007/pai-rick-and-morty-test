import React from "react"
import { CharacterContainer, AvatarImg } from "./Character.styled"

const CharacterCard = ({ id, name, gender, species, avatar }: LickApi.ICharacterCore) => {
    return (
        <>
            <CharacterContainer className="w-[15%] p-3">
                <AvatarImg src={avatar} className="w-full" />
            </CharacterContainer>
        </>
    )
}

export default CharacterCard
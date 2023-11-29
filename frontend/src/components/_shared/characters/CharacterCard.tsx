import React from "react"
import { useRouter } from "next/dist/client/router"
import { CharacterContainer, AvatarImg } from "./Character.styled"

const CharacterCard = ({ id, name, gender, species, avatar }: LickApi.ICharacterCore) => {
    const router = useRouter()

    return (
        <CharacterContainer className="w-full sm:w-[40%] md:w-[25%] lg:w-[20%] xl:w-[15%] px-10 md:px-5 text-white flex flex-col mb-10 md:mb-[100px] cursor-pointer">
            <AvatarImg src={avatar} className="w-full" />
            <ul className="mt-3 flex flex-col gap-2 mb-7 flex-grow">
                <li>Name: { name }</li>
                <li>Gender: { gender }</li>
                <li>Species: { species }</li>
            </ul>
            <button className="uppercase bg-green text-black py-2" onClick={() => router.push(`/character/${id}`)}>View Profile</button>
        </CharacterContainer>
    )
}

export default CharacterCard
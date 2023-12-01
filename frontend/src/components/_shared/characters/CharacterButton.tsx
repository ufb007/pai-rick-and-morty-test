import React from "react"
import { useRouter } from "next/dist/client/router"
import { CharButton } from "./Character.styled"

type characterButtonType = {
    title: string,
    link: string
}

const CharacterButton: React.FC<characterButtonType> = ({ title, link }) => {
    const router = useRouter()

    return (
        <CharButton className="w-full text-black" onClick={() => router.push(link)}>
            <div className="front uppercase bg-green py-2">
                <h1>{ title }</h1>
            </div>
            <div className="back uppercase bg-green py-2">
                <h1 className="font-schwifty">{ title }</h1>
            </div>
        </CharButton>
    )
}

export default CharacterButton
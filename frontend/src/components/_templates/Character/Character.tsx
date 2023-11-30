import Meta from "@/components/Meta";
import { CharacterContainer, Wrapper, AvatarImg, Name } from "./Character.styled";
import { IoCaretBackSharp } from 'react-icons/io5'
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

interface ICharacterTemplateProps {
    title: string;
    character: LickApi.ICharacter
}

const goBackQuotes: string[] = [
    "Hey Morty, buckle up! We're gonna go back",
    "Back to the couch. Either way, it's an adventure!",
    "I just want to go back and eat some Eyeholes or something",
    "Aw, geez, Rick! This dimension is getting too weird for me",
    "Let's head back home and leave the craziness behind",
    "Alright, Morty, time to wrap it up and head back to our cozy dimension",
    "Pack your bags, Morty! Our next adventure awaits at home",
    "Morty, let's go home. Leaving the house always leads to trouble"
];

const CharacterTemplate: React.FC<ICharacterTemplateProps> = ({ title, character }) => {
    const [goBackQuote, setGoBackQuote] = useState<string>('')
    const { 
        name,
        avatar,
        episodes,
        gender,
        location,
        origin,
        species,
        status
    } = character

    const router = useRouter()

    useEffect(() => {
        const quoteNumber: number = Math.floor(Math.random() * goBackQuotes.length)
        setGoBackQuote(goBackQuotes[quoteNumber])
    }, [])

    return (
        <>
            <Meta title={title} />
            <CharacterContainer className="mb-10">
                <Wrapper className="bg-green h-[450px] sm:h-[400px] w-full pt-5 pl-5 relative flex flex-col items-center sm:items-start">
                    <img src="/rick-and-morty-logo.png" className="w-[250px] mb-5" />
                    <button onClick={() => router.back()} className="flex items-center font-schwifty text-sm sm:text-lg"><IoCaretBackSharp className="mr-3" /> {goBackQuote}</button>

                    <Wrapper className="absolute bottom-[-40px] left-[50%] items-center sm:items-start translate-x-[-50%] sm:translate-x-0 sm:left-5 flex flex-col-reverse sm:flex-row ">
                        <AvatarImg src={avatar} className="w-[170px] sm:w-[200px] border rounded-full" />

                        <Wrapper className="text-black text-center sm:text-left sm:ml-10 pb-5 flex flex-col mt-5 gap-1">
                            <Name className="text-3xl font-schwifty pb-3">{ name }</Name>
                            <p>Status: { status }</p>
                            <p>Origin: { origin?.name }</p>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Wrapper className="text-white pt-[100px] px-10">
                    <Name className="font-schwifty text-3xl">Location Details:</Name>
                    <ul className="flex flex-col gap-2 mt-5">
                        <li>Name: { location?.name }</li>
                        <li>Type: { location?.type }</li>
                        <li>Dimension: { location?.dimension }</li>
                        <li>No. of Residents: { location?.noOfResidents }</li>
                    </ul>
                </Wrapper>
                <Wrapper className="text-white pt-10 px-10">
                    <Name className="font-schwifty text-3xl">Episodes: { episodes?.length }</Name>
                    <ul className="flex flex-col gap-2 mt-5">
                        {episodes?.map(({ name, episode, airDate, noOfCharacters }: LickApi.IEpisode, index) => {
                            const firstLast: string = (index === 0) ? 'First' : 'Last';

                            return (
                                <>
                                    <li>{firstLast} appearance: {name} {episode}</li>
                                    <li>{firstLast} appearance air date: {airDate}</li>
                                    <li>{firstLast} appearance character count: {noOfCharacters}</li>
                                </>
                            )
                        })}
                    </ul>
                </Wrapper>
            </CharacterContainer>
        </>
    )
}

export default CharacterTemplate
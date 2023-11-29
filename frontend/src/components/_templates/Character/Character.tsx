import Meta from "@/components/Meta";
import { CharacterContainer, Wrapper, AvatarImg, Name } from "./Character.styled";
import { IoCaretBackSharp } from 'react-icons/io5'
import { useRouter } from "next/dist/client/router";

interface ICharacterTemplateProps {
    title: string;
    character: LickApi.ICharacter
}

const CharacterTemplate: React.FC<ICharacterTemplateProps> = ({ title, character }) => {
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

    return (
        <>
            <Meta title={title} />
            <CharacterContainer>
                <Wrapper className="bg-green h-[450px] sm:h-[400px] w-full pt-5 pl-5 relative">
                    <img src="/rick-and-morty-logo.png" className="w-[250px] mb-5" />
                    <button onClick={() => router.back()} className="flex items-center font-schwifty text-2xl"><IoCaretBackSharp className="mr-3" /> Go Back</button>

                    <Wrapper className="absolute bottom-[-40px] left-[50%] items-center sm:items-start translate-x-[-50%] sm:translate-x-0 sm:left-5 flex flex-col-reverse sm:flex-row ">
                        <AvatarImg src={avatar} className="w-[170px] sm:w-[200px] border rounded-full" />

                        <Wrapper className="text-black text-center sm:text-left sm:ml-10 pb-5 flex flex-col mt-5 gap-1">
                            <Name className="text-3xl font-schwifty pb-3">{ name }</Name>
                            <p>Status: { status }</p>
                            <p>Origin: { origin.name }</p>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Wrapper className="text-white pt-[100px] px-10">
                    <Name className="font-schwifty text-3xl">Location Details:</Name>
                    <ul className="flex flex-col gap-2 mt-5">
                        <li>Name: { location.name }</li>
                        <li>Type: { location.type }</li>
                        <li>Dimension: { location.dimension }</li>
                        <li>No. of Residents: { location.noOfResidents }</li>
                    </ul>
                </Wrapper>
                <Wrapper className="text-white pt-10 px-10">
                    <Name className="font-schwifty text-3xl">Episodes: { episodes.length }</Name>
                </Wrapper>
            </CharacterContainer>
        </>
    )
}

export default CharacterTemplate
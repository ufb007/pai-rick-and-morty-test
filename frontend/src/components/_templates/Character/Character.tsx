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
                <Wrapper className="bg-green h-[400px] w-full pt-5 pl-5 relative">
                    <img src="/rick-and-morty-logo.png" className="w-[250px] mb-5" />
                    <button onClick={() => router.back()} className="flex items-center font-schwifty text-2xl"><IoCaretBackSharp className="mr-3" /> Go Back</button>

                    <Wrapper className="absolute bottom-[-40px] left-5 flex">
                        <AvatarImg src={avatar} className="border rounded-full" />

                        <Wrapper className="text-black ml-10 flex flex-col mt-5 gap-1">
                            <Name className="text-3xl font-schwifty pb-3">{ name }</Name>
                            <p>Status: { status }</p>
                            <p>Origin: { origin.name }</p>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </CharacterContainer>
        </>
    )
}

export default CharacterTemplate
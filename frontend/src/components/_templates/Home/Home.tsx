import Meta from "@/components/Meta";
import CharacterCard from "@/components/characters/CharacterCard";
import { HomeContainer, Wrapper } from "@/styles/Home/Home.styled";
import Image from 'next/image'

interface IHomeTemplateProps {
    title: string;
    characters: LickApi.ICharacterCore[]
}

const HomeTemplate: React.FC<IHomeTemplateProps> = ({ title, characters }) => {
    return (
        <>
            <Meta title={title} />
            <HomeContainer>
                <Wrapper className="flex gap-3 flex-wrap justify-center">
                    {characters.map((character: LickApi.ICharacterCore) => {
                        return (
                            <CharacterCard {...character} />
                        )
                    })}
                </Wrapper>
            </HomeContainer>
        </>
    )
}

export default HomeTemplate
import Meta from "@/components/Meta";
import CharacterCard from "@/components/characters/CharacterCard";
import { HomeContainer, Wrapper, LogoImg } from "@/styles/Home/Home.styled";

interface IHomeTemplateProps {
    title: string;
    characters: LickApi.ICharacterCore[]
}

const HomeTemplate: React.FC<IHomeTemplateProps> = ({ title, characters }) => {
    return (
        <>
            <Meta title={title} />
            <HomeContainer>
                <Wrapper className="flex justify-center pt-10 pb-40 bg-green">
                    <LogoImg src="/rick-and-morty-logo.png" className="p-5 w-full md:w-1/2" />
                </Wrapper>
                <Wrapper className="flex flex-wrap mt-[-80px] px-5">
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
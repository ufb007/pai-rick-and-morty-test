import Meta from "@/components/Meta";
import CharacterCard from "@/components/characters/CharacterCard";
import { HomeContainer } from "@/styles/Home/Home.styled";

interface IHomeTemplateProps {
    title: string;
    characters: LickApi.ICharacterCore
}

const HomeTemplate: React.FC<IHomeTemplateProps> = ({ title, characters }) => {
    return (
        <>
            <Meta title={title} />
            <HomeContainer className="text-lg">
                <CharacterCard />
            </HomeContainer>
        </>
    )
}

export default HomeTemplate
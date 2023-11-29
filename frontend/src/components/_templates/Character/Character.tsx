import Meta from "@/components/Meta";

interface ICharacterTemplateProps {
    title: string;
    character: LickApi.ICharacter
}

const CharacterTemplate: React.FC<ICharacterTemplateProps> = ({ title, character }) => {
    return (
        <>
            <Meta title={title} />
        </>
    )
}

export default CharacterTemplate
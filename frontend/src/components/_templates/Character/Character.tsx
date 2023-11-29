import Meta from "@/components/Meta";

interface ICharacterTemplateProps {
    title: string;
}

const CharacterTemplate: React.FC<ICharacterTemplateProps> = ({ title }) => {
    return (
        <>
            <Meta title={title} />
        </>
    )
}

export default CharacterTemplate
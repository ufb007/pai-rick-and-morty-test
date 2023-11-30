import { NextPage } from 'next';
import CharacterTemplate from '@/components/Character';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';

const CharacterPage: NextPage = () => {
  const [character, setCharacter] = useState<LickApi.ICharacter>()
  const router = useRouter();
  const { slug } = router.query

  useEffect(() => {
    if (slug !== undefined) {
      fetch(`/api/characters/${slug}`)
        .then(res => {
          if (res.status === 404) {
            throw new Error("Character not found");
          }

          return res.json()
        })
        .then(character => {
          setCharacter(character)
        })
        .catch(error => {
          router.replace('/404')
        })
    }
  }, [slug])

  if (character !== undefined) {
    return <CharacterTemplate title={`${character.name} - Rick and Morty FE Tech Test`} character={character} />;
  } else {
    return (<></>)
  }
};

export default CharacterPage;

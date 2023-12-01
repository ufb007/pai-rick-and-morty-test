import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import HomeTemplate from '@/components/Home';

const Home: NextPage = () => {
  const [characters, setCharacters] = useState<LickApi.ICharacterCore[]>([])

  useEffect(() => {
    fetch(`${process.env.apiURL}/get-characters/rick/alive`)
      .then((res) => res.json())
      .then((response) => {
        setCharacters(response.characters)
      })
  }, [])


  /*useEffect(() => {
    fetch('/api/characters')
      .then((res) => res.json())
      .then((characters) => {
        setCharacters(characters.data)
      })
  }, [])*/

  return <HomeTemplate title="Rick and Morty FE Tech Test" characters={ characters } />;
};

export default Home;

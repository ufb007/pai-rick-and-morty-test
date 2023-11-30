import { NextApiRequest, NextApiResponse } from 'next';
import Characters from '@/mockdata/allCharacters.json'

/**
 * For more info on API and Dynamic API routes please read the nextJS docs here
 * https://nextjs.org/docs/api-routes/introduction
 */

const singleCharacterCtrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  const id: number = Number(slug);

  const character = Characters.data.find((character: LickApi.ICharacter) => character.id === id)

  res.status(200).json(character);
};

export default singleCharacterCtrl;

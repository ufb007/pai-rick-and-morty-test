import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';

/**
 * For more info on API and Dynamic API routes please read the nextJS docs here
 * https://nextjs.org/docs/api-routes/introduction
 */

const singleCharacterCtrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  const file = await fs.readFile(`${process.cwd()}/mockdata/allCharacters.json`, 'utf-8');
  const characters = JSON.parse(file);

  const character: LickApi.ICharacter = characters.data.find((character: LickApi.ICharacter) => character.id === parseInt(slug))

  res.status(200).json(character);
};

export default singleCharacterCtrl;

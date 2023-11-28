import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';

/**
 * For more info on API routes please read the nextJS docs here
 * https://nextjs.org/docs/api-routes/introduction
 */

const charactersCtrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const file = await fs.readFile(`${process.cwd()}/mockdata/allCharacters.json`, 'utf-8');
  const characters = JSON.parse(file);

  const body: { data: LickApi.ICharacterCore[] } = {
    data: characters.data
  };
  
  res.status(200).json(body);
};

export default charactersCtrl;

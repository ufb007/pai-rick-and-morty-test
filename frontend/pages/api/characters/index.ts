import { NextApiRequest, NextApiResponse } from 'next';
import Characters from '@/mockdata/allCharacters.json'

/**
 * For more info on API routes please read the nextJS docs here
 * https://nextjs.org/docs/api-routes/introduction
 */

const charactersCtrl = (req: NextApiRequest, res: NextApiResponse) => {
  const body: { data: LickApi.ICharacterCore[] } = {
    data: Characters.data
  };
  
  res.status(200).json(body);
};

export default charactersCtrl;

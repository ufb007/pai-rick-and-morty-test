import express, { Request, Response, NextFunction } from 'express';
import tsConfig from '../tsconfig.json';
import tsConfigPaths from 'tsconfig-paths';
import 'dotenv/config';

tsConfigPaths.register({
    baseUrl: './src',
    paths: tsConfig.compilerOptions.paths
});

import axios from '@utils/axios';

const app = express();

// CORS middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
    const getAllCharacters = await axios('/character');

    console.log('Get all characters - ', getAllCharacters)

    res.json({ success: true })
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
});
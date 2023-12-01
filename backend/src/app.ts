import express, { Request, Response, NextFunction } from 'express';
import tsConfig from '../tsconfig.json';
import { register } from 'tsconfig-paths';
import 'dotenv/config';

register({
    baseUrl: './src',
    paths: tsConfig.compilerOptions.paths
});

import CharacterRoute from '@routes/CharacterRoute';

const app = express();

// CORS middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json());

app.use('/character', CharacterRoute);

app.listen(8080, () => {
    console.log("Listening on port 8080");
});
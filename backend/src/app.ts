import express, { Request, Response, NextFunction } from 'express';

const app = express();

// CORS middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ success: true })
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
});
import express, { Express, Response, Request } from 'express';
import * as dotenv from 'dotenv';
import { AppDataSource } from './config/database';
import router from './routes/api';
import cors from 'cors';

const app: Express = express();

dotenv.config();

const port = process.env.EXPRESS_APP_PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello world' });
});

app.use('/api', router);
app.use(cors())

AppDataSource.initialize()
    .then(() => {
        console.log('Typeorm was connected to the mysql database.')
        app.listen(port, () => console.log(`Server running on port: ${3000}`));
    })
    .catch((error: string) => console.error('Typeorm Error: ', error));

import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentsRoute } from './app/modules/student/student.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

//applications routes

app.use('/api/v1/students', StudentsRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;

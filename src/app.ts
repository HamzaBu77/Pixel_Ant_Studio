import express from 'express';
import userRouter from './routes/app/auth';

const app = express();

app.use(express.json());

app.use("/", userRouter)

export default app;
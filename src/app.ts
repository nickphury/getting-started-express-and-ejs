import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bookRouter from './routes/book.routes';
import mongoose, { ConnectOptions } from 'mongoose';
import fs from 'fs';
import userRouter from './routes/user.routes';
import { authMiddleware } from './middleware/session-auth';
import { getSession } from './tools/session';

// initialize configuration
dotenv.config();

const app = express();
//
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@gs-node-express-db.dyrti.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err: any) => {
    console.log('Connexion à MongoDB échouée : ');
    fs.writeFileSync('./mongodb_connection_logs.json', JSON.stringify(err), {
      encoding: 'utf-8',
    });
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//
app.use(getSession);

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/info', (req, res) => {
  res
    .send({
      name: process.env.npm_package_name,
      version: process.env.npm_package_version,
    })
    .status(200);
});

app.use('/books', authMiddleware, bookRouter);
app.use('/user', userRouter);

export default app;

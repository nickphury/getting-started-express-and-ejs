import express from 'express';
import path from 'path';

// initialize configuration
// dotenv.config();

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.render('index');
});

export default app;

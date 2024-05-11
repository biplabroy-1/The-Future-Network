// index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import dbConnect from './utils/dbconnect.js';
import routes from './utils/routes.js';

const app = express();
app.use(cors());

dbConnect;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

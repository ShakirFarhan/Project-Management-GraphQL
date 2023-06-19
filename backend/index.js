import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connection.js';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';
import colors from 'colors';
import cors from 'cors';
dotenv.config();
const port = process.env.PORT || 8000;
connectDB();
const app = express();

// Connect to database

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server running on port ${port}`));

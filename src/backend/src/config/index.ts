import { config } from 'dotenv';

const initDotenv = () => config({ path: `${__dirname}/.env.${process.env.NODE_ENV}` });

export { initDotenv };

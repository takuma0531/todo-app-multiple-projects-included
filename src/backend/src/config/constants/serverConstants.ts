import { initDotenv } from '../index';

initDotenv();

class ServerConstants {
    public static readonly SERVER_HOST = process.env.HOST;
    public static readonly SERVER_PORT = process.env.PORT;
}

export default ServerConstants;
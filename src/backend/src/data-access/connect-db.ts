import { connect } from 'mongoose';
import { config } from 'dotenv';

config();

const connectionString =
  process.env.DB_CONNECTION_STRING || 'DB_CONNECTION_STRING';

const connectDB = async () => {
  try {
    await connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected!');
  } catch (err) {
    console.log(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

export { connectDB };

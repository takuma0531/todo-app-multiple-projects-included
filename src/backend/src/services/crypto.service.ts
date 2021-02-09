import bcrypt from 'bcrypt';

const encrypt = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  } catch (error) {
    throw error;
  }
};

const compare = async (password: string, hash: string): Promise<boolean> => {
  try {
    const result = await bcrypt.compare(password, hash);

    return result;
  } catch (error) {
    throw error;
  }
};

export default {
  encrypt,
  compare,
};

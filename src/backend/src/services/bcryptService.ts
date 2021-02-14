import bcrypt from 'bcrypt';
import { ICryptoService } from './interfaces';

class BcryptService implements ICryptoService {
  public async encrypt(password: string): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      return hash;
    } catch (error) {
      throw error;
    }
  }

  public async compare(password: string, hash: string): Promise<boolean> {
    try {
      const result = await bcrypt.compare(password, hash);

      return result;
    } catch (error) {
      throw error;
    }
  }
}

export const bcryptService = new BcryptService();

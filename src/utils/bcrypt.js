import bcrypt from 'bcrypt.js';

export const hashPassword = (plainPass) => {
  return bcrypt.hashSync(plainPass);
};

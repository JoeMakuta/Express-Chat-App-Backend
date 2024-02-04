import bcrypt from "bcrypt";

const cryptPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export default cryptPassword;

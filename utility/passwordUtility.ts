import bcrypt from "bcryptjs";

export const generateSalt = async () => {
	return await bcrypt.genSalt();
};

export const hashPassowrd = async (passowrd: string, salt: string) => {
	return await bcrypt.hash(passowrd, salt);
};

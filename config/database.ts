import mongoose from "mongoose";

const dbConnection = () => {
	mongoose.connect(String(process.env.DB_URI)).then((con: any) => {
		console.log(`Database Connected: ${con.connection.host}`);
	});
};

export default dbConnection;

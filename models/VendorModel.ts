import mongoose, { Schema, Document, model } from "mongoose";

interface VendorDoc extends Document {
	name: String;
	ownerName: String;
	foodType: [String];
	pincode: String;
	address: String;
	phone: String;
	email: String;
	password: String;
	salt: String;
	serviceAvailabel: boolean;
	coverImages: [String];
	rating: Number;
	// foods: any;
}

const VendorSchema = new Schema(
	{
		name: { type: String, required: true },
		ownerName: { type: String, required: true },
		foodType: { type: [String] },
		pincode: { type: String, required: true },
		address: { type: String },
		phone: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		salt: { type: String, required: true },
		serviceAvailabel: { type: Boolean },
		coverImages: { type: [String] },
		rating: { type: Number },
		// foods: { type: mongoose.Schema.ObjectId, ref: "Food" },
	},
	{ timestamps: true }
);

const Vendor = model<VendorDoc>("Vendor", VendorSchema);

export { Vendor };

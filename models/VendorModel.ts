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
		serviceAvailabel: { type: Boolean, default: false },
		coverImages: { type: [String], default: [] },
		rating: { type: Number, default: 0 },
		// foods: { type: mongoose.Schema.ObjectId, ref: "Food" },
	},

	{
		toJSON: {
			transform(doc, res) {
				delete res.salt;
				delete res.password;
				delete res.__v;
				delete res.createdAt;
				delete res.updatedAt;
			},
		},
		timestamps: true,
	}
);

const Vendor = model<VendorDoc>("Vendor", VendorSchema);

export { Vendor };

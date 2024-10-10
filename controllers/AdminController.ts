import { Request, Response, NextFunction } from "express";
import { createVendorInput } from "../dto";
import { Vendor } from "../models";

import { generateSalt, hashPassowrd } from "../utility";

export const FindVendor = async (id: string | undefined, email?: string) => {
	if (email) {
		return await Vendor.findOne({ email });
	} else {
		return await Vendor.findById(id);
	}
};

export const createVendor = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const {
		name,
		ownerName,
		foodType,
		pincode,
		address,
		email,
		password,
		phone,
	} = <createVendorInput>req.body;

	const exisitingVendor = await FindVendor(undefined, String(email));

	if (exisitingVendor !== null) {
		return res
			.status(400)
			.json({ message: "A vendor is exisit with this email" });
	}

	const salt = await generateSalt();
	const hashedPassword = await hashPassowrd(String(password), salt);

	const newVendor = await Vendor.create({
		name,
		address,
		pincode,
		foodType,
		email,
		password: hashedPassword,
		salt,
		ownerName,
		phone,
	});

	return res.status(201).json({ result: newVendor, message: "vendor created" });
};
export const getVendors = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const vendors = await Vendor.find();

	if (vendors !== null) {
		return res.status(200).json(vendors);
	}

	return res.status(400).json({ message: "there is not eny vendors" });
};

export const getVendor = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { vendorId } = req.params;

	const exisitingVendor = await FindVendor(vendorId);

	if (exisitingVendor !== null) {
		return res.status(200).json({ result: exisitingVendor });
	}

	return res
		.status(400)
		.json({ message: "the vendor not exisit with this id" });
};

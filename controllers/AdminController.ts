import express, { Request, Response, NextFunction } from "express";
import { createVendorInput } from "../dto";
import { Vendor } from "../models";

import { generateSalt, hashPassowrd } from "../utility";

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

	const exisitingVendor = await Vendor.findOne({ email });

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
		password: hashPassowrd,
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

	return res
		.status(400)
		.json({ message: "there is not eny vendors" });
};
export const getVendor = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { vendorId } = req.params;

	const vendor = await Vendor.findById(vendorId);

	if (vendor !== null) {
		return res.status(200).json({ result: vendor });
	}

	return res
		.status(400)
		.json({ message: "the vendor not exisit with this id" });
};

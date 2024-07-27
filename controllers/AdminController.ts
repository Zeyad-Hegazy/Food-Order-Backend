import express, { Request, Response, NextFunction } from "express";
import { createVendorInput } from "../dto";
import { Vendor } from "../models";

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
};
export const getVendors = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {};
export const getVendor = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {};

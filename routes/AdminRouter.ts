import { Router } from "express";

import { createVendor, getVendors, getVendor } from "../controllers";

const router = Router();

router.route("/vendor").post(createVendor).get(getVendors);
router.route("/vendor/:id").get(getVendor);

export { router as AdminRoute };

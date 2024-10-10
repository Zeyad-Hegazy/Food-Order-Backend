import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "config.env" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import dbConnection from "./config/database";
import { AdminRoute, VendorRoute } from "./routes";

dbConnection();

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app.use("/", (req, res, next) => res.send("Hello from Food Order app"));

app.listen(8000, () => {
	console.clear();
	console.log("App is running on port 8000");
});

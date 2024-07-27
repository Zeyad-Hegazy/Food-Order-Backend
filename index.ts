import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { AdminRoute, VendorRoute } from "./routes";

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app.use("/", (req, res, next) => res.send("Hello from Food Order app"));

app.listen(8000, () => {
	console.clear();
	console.log("App is running on port 8000");
});

// creating api, route create
import express from "express";
import { login, register } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(register); // register import from user.controller.js
router.route("/login").post(login);

export default router;
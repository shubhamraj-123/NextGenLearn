import express from "express";
import { submitContactForm } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", submitContactForm);

export default router;

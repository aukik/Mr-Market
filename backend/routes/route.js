import express from "express"
import { getMain, getPost } from "../controllers/main.js"

const router = express.Router()
router.get("/", getMain)
router.post("/", getPost)
export default router

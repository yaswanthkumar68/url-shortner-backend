import { Router } from "express";
import { postUrl, getUrl } from "../controllers/urlController.js";

const router = Router()

router.post('/url', postUrl)
router.get('/:id', getUrl)

export default router
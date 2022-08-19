import express from 'express'
import { updateUser, deleteUser, getUser, subscribe, unsubscribe, like, dislike  } from "../controllers/user.js"
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

router.put("/:id", verifyToken, updateUser)
router.delete("/:id", deleteUser)
router.get("/find", getUser)
router.put("/sub/:id", subscribe)
router.put("/unsub/:id", unsubscribe)
router.put("/like/:videoId", like)
router.put("/dislike/:videoId", dislike)



export default router;
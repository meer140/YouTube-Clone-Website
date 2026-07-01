import { Router } from "express";
import upload from "../middlewares/multer.middlewares.js"
import verifyJWT from "../middlewares/auth.middlewares.js";
import { publishAVideo ,getVideoById,updateVideo} from "../controllers/video.controller.js";

const videoRouter = Router()

videoRouter.route("/publish-video").post(verifyJWT,
    upload.fields([
    {
        name : "videoFile",
        maxCount : 1
    },
    {
        name : "thumbNail",
        maxCount : 1
    }]),
    publishAVideo
)

videoRouter.route("/c/:videoId").get(verifyJWT,getVideoById)
videoRouter.route("/c/:videoId").post(verifyJWT,upload.single("thumbNail"),updateVideo)


export default videoRouter
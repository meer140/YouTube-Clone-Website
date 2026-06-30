import { Router } from "express";
import upload from "../middlewares/multer.middlewares.js"
import verifyJWT from "../middlewares/auth.middlewares.js";
import { publishAVideo } from "../controllers/video.controller.js";

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


export default videoRouter
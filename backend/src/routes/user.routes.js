import {Router} from "express";
import {
    registerUser,
    userLogin,
    userLogOut,
    refreshAccessToken,
    changeCurrentPassword,
    updateUserDetail,
    updateUserAvatar,
    updateUserCoverImage,
    getUserChannelProfile,
    getUserWatchHistory
} 
from "../controllers/user.controller.js";
import upload from "../middlewares/multer.middlewares.js"
import verifyJWT from "../middlewares/auth.middlewares.js";

const userRouter = Router()

userRouter.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

userRouter.route("/login").post(userLogin)
userRouter.route("/logout").post(verifyJWT,userLogOut)
userRouter.route("/refresh-token").post(refreshAccessToken)
userRouter.route("/change-password").post(verifyJWT,changeCurrentPassword)
userRouter.route("/update-account").patch(verifyJWT,updateUserDetail)
userRouter.route("/avatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)
userRouter.route("/coverImage").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage)
userRouter.route("/c/:username").get(verifyJWT,getUserChannelProfile)
userRouter.route("/history").get(verifyJWT,getUserWatchHistory)


export default userRouter;
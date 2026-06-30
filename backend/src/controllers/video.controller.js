import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import { Video } from "../models/video.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import ApiResponse from "../utils/apiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const publishAVideo = asyncHandler(async (req,res) => {
    const {title,description} = req.body

    if(!title || !description){
        throw new ApiError(400,"Both title and description fields are required")
    }
    
    const videoLocalPath = req.files?.videoFile[0]?.path
    const thumbNailLocalPath = req.files?.thumbNail[0]?.path

    if(!videoLocalPath || !thumbNailLocalPath){
        throw new ApiError(400,"video or thumbnail path does not found")
    }

    const videoFile = await uploadOnCloudinary(videoLocalPath)
    const thumbNail = await uploadOnCloudinary(thumbNailLocalPath)

    if(!videoFile || !thumbNail){
        throw new ApiError(500,"Error while uploading file on cloudinary")
    }
    
    const video = await Video.create({
        title,
        description,
        videoFile : videoFile?.url,
        thumbNail : thumbNail?.url,
        duration : videoFile?.duration,
        owner : req?.user._id
    })

    if(!video){
        throw new ApiError(500,"Something went wrong while creating the video")
    }

    return res
    .status(200)
    .json(new ApiResponse(200,video,"Video is published successfully"))
})



export {publishAVideo}
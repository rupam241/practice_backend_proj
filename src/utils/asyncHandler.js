import { request } from "express"

const asyncHandler=(requestHandler)=>{

    (res,req,next)=>{
        Promise.resolve(request(req,res,next)).catch((err)=>next(err))
    }



}


export {asyncHandler}

// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try {
//         await(res,res,next)
//     } catch (error) {
//         res.status(err.code||500).json({
//             success:false,
//             messge:err.messge
//         })
//     }




import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from 'mongodb-aggregate-paginate-v2'

const videoSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    thubnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: number,
      required: true,
    },
    viwes: {
      type: number,
      default: 0,
    },
    isPublish:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
  },
  { timestamps: true }
);
videoSchema.plugin(mongooseAggregatePaginate)
export const video = mongoose.model("video", videoSchema);

import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: [mongoose.Schema.Types.ObjectId],
      ref : "users",
      required: true,
    },

    Author: {
        type: String,
        required: true,
    },

    content : {
        type : String,
        required : true,
    }

  },
  { timestamps: true }
);

export default mongoose.model("posts", postSchema);
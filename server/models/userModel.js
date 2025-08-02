import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
    },

    headline : {
        type : String,
        default : "Software Engineer at DevCircle",
    },

    createdPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events",
      },
    ],

  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
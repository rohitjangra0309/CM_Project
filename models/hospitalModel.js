const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    hName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    // vacCost: {
    //   type: Number,
    //   required: true,
    // },
    timings : {
      type: Array,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    vaccinesArray:{
      type: [String]
    }
    
  },
  {
    timestamps: true,
  }
);

const hospitalModel = mongoose.model("Hospital", hospitalSchema);
module.exports = hospitalModel;

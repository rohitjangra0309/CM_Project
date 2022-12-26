const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Hospital = require("../models/hospitalModel");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/get-all-hospitals", authMiddleware, async (req, res) => {
  try {
    const hospitals = await Hospital.find({});
    res.status(200).send({
      message: "Hospitals fetched successfully",
      success: true,
      data: hospitals,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying hospital account",
      success: false,
      error,
    });
  }
});

router.get("/get-all-users", authMiddleware, async (req, res) => {
  try {
    const users = await User.find({});
    const search = (user) =>{
      return user.filter(u=>(u.isHospital==false&&u.isAdmin==false));
    }
    
    res.status(200).send({
      message: "Users fetched successfully",
      success: true,
      data: search(users),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying hospital account",
      success: false,
      error,
    });
  }
});

router.post(
  "/change-hospital-account-status",
  authMiddleware,
  async (req, res) => {
    try {
      const { hospitalId, status } = req.body;
      const hospital = await Hospital.findByIdAndUpdate(hospitalId, {
        status,
      });

      const user = await User.findOne({ _id: hospital.userId });
      const unseenNotifications = user.unseenNotifications;
      unseenNotifications.push({
        type: "new-hospital-request-changed",
        message: `Your hospital account has been ${status}`,
        onClickPath: "/notifications",
      });
      user.isHospital = status === "approved" ? true : false;
      await user.save();

      res.status(200).send({
        message: "Hospital status updated successfully",
        success: true,
        data: hospital,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error applying hospital account",
        success: false,
        error,
      });
    }
  }
);



module.exports = router;

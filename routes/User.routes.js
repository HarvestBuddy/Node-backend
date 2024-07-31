const express = require("express");
const router = express.Router();

const { signUpPhone, loginUsingPhoneNumber, sendOTPPhone, changePasswordPhone, forgotPasswordPhone, refreshRoute,
  logout } = require('../controllers/AuthPhone.controller')

const { sendOTP } = require('../controllers/Auth.controller')

const { verifyOTPEmail, verifyOTPPhone } = require('../controllers/OTP.controller')

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword.controller");

const { resetPasswordTokenPhone, resetPasswordPhone } = require('../controllers/ResetPasswordPhone.controller')

const { auth } = require("../middlewares/middleware");

router.get('/hello', async (req, res) => {
  try {
    console.log(req.body.hello.hello);
    return res.status(200).json({
      success: true,
      message: "Hello World"
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "An Error Occurred",
      error: error.message
    })
  }
})

router.post("/sendOTPPhone", sendOTPPhone);  //Working
router.post('/sendOTP', sendOTP) //Working
router.post("/verifyOTPPhone", verifyOTPPhone); //Working
router.post('/verifyOTPEmail', verifyOTPEmail) //Working

router.post("/signUp", signUpPhone); //Working
router.post('/login', loginUsingPhoneNumber)  //Working
router.put("/changePassword", auth, changePasswordPhone); //Working
router.post('/forgotPassword', forgotPasswordPhone) //Working
router.get("/refreshRoute", refreshRoute); //Working
router.post("/logout", logout); //Working

router.post("/reset-Password-Token", resetPasswordToken); //Working
router.post("/reset-Password", resetPassword);  //Working

router.post("/reset-Password-Token-Phone", resetPasswordTokenPhone); //Working
router.post("/reset-Password-Phone", resetPassword); //Working

module.exports = router;
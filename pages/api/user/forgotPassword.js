import User from "./../../../backend/userModel";
import axios from "axios";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { mobile } = req.body;

    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(200).json({
        status: "error",
        error: `No user found with number ${mobile}!`,
      });
    }

    // 2) Generate the random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({
      validateBeforeSave: false,
    });

    // 3) Send it to user's whatsapp
    const resetURL = `https://fortebridgelogistics.com/forgot-password/${resetToken}`;

    const title = `Forgot your FORTE-BRIDGE Account password?
Open this link in a browser to reset your password`;

    try {
      const values = {
        body: resetURL,
        title,
        phone: mobile,
      };

      await axios.post(
        "https://eu176.chat-api.com/instance225964/sendLink?token=u10endg0wkm7iu17",
        values
      );

      return res.status(200).json({
        status: "success",
        message: `Reset token sent to ${mobile}!`,
      });
    } catch (err) {
      console.log(err);
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({
        validateBeforeSave: false,
      });

      return res.status(200).json({
        status: "error",
        error: `An error occurred! Please try again later!`,
      });
    }
  } else {
    return res.status(200).json({
      status: "error",
      error: `Please use POST method!`,
    });
  }
};
export default handler;
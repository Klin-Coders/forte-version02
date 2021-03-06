import { connectToDatabase } from "./../../../backend/dbConnect";
import Shipment from "./../../../backend/shipmentModel";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  await connectToDatabase();
  if (req.method === "GET") {
    const session = await getSession(req);
    if (!session) {
      return res.status(200).json({
        status: "error",
        msg: "You must be logged in!",
      });
    }

    try {
      const statistics = await Shipment.aggregate([
        {
          $match: { user: session.user._id },
        },
        {
          $group: {
            _id: null,
            totalKg: {
              $sum: "$weight",
            },
            totalShipments: {
              $sum: 1,
            },
          },
        },
      ]);
      return res.status(200).json({
        status: "success",
        data: statistics,
      });
    } catch (error) {
      console.log(error);
      return res.status(200).json({
        status: "error",
        msg: "Something went wrong!",
      });
    }
  } else {
    return res.status(200).json({
      status: "error",
      msg: "Invalid request method!",
    });
  }
};
export default handler;

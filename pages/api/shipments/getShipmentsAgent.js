import { connectToDatabase } from "./../../../backend/dbConnect";
import Shipment from "./../../../backend/shipmentModel";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  await connectToDatabase();
  if (req.method === "POST") {
    const session = await getSession({ req });
    if (!session || session?.user?.role !== "admin") {
      return res.status(200).json({
        status: "error",
        error: "You must be logged in!",
      });
    }

    const { agentId } = req.body;
    if (!agentId) {
      return res.status(200).json({
        status: "error",
        error: "incomplete query params!",
      });
    }

    try {
      const shipments = await Shipment.find({ user: agentId });
      return res.status(200).json({
        status: "success",
        data: shipments,
      });
    } catch (error) {
      console.log(error);
      return res.status(200).json({
        status: "error",
        error: "An error occurred!",
      });
    }
  }
};
export default handler;

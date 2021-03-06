import { connectToDatabase } from "./../../backend/dbConnect";
import Funds from "./../../backend/fundsModel";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  await connectToDatabase();
  if (req.method === "GET") {
    const session = await getSession({ req });
    if (!session || session?.user?.role !== "admin") {
      return res
        .status(200)
        .json({ status: "error", error: "You are not logged in" });
    }

    try {
      const transactions = await Funds.find({}).sort({ createdAt: -1 });
      return res
        .status(200)
        .json({ status: "success", transactions: transactions });
    } catch (error) {
      return res
        .status(200)
        .json({ status: "error", error: "Something went wrong" });
    }
  }
};
export default handler;

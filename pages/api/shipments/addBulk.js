import Shipment from "./../../../backend/shipmentModel";
import User from "./../../../backend/userModel";
import Fund from "./../../../backend/fundsModel";
import { startOfDay, endOfDay } from "date-fns";
import axios from "axios";
import { connectToDatabase } from "./../../../backend/dbConnect";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  await connectToDatabase();

  // const jeffe = await Shipment.find({ name: "JEFFE" });

  // console.log(jeffe.length);

  //   const shipments = await Shipment.find().limit(309).sort({
  //     createdAt: -1,
  //   });
  //   shipments.forEach(async (shipment) => {
  //     const del = await Shipment.findByIdAndDelete(shipment._id);

  //     console.log(del);
  //   });

  const all = await User.find();
  all.forEach(async (user) => {
    const users = await User.findByIdAndUpdate(user._id, {
      wallet: 0,
      balance: 0,
      totalKg: 0,
    });
    console.log(users);
  });

  try {
    const calculateOne = async () => {
      const date1 = startOfDay(new Date("02/01/2020"));
      const date2 = endOfDay(new Date("02/01/2021"));
      const shipment = await Shipment.find({
        createdAt: { $gte: date1, $lte: date2 },
      });
      shipment.forEach(async (ship) => {
        const weight = ship.weight;
        const halfWeight = weight / 2;
        const dollar = halfWeight * 470;
        const naira = weight * 50;
        const total = Math.round(dollar + naira);
        const update = await User.findByIdAndUpdate(ship.user, {
          $inc: {
            wallet: total,
            totalKg: weight,
          },
        });
        await Shipment.findByIdAndUpdate(ship._id, {
          calculated: true,
          rebate: total,
        });
        console.log(
          `first ${update.fullname} wallet with ${total}, Total: N${update.wallet}`
        );
      });
    };
    const calculateSecond = async () => {
      const date1 = startOfDay(new Date("02/02/2021"));
      const date2 = endOfDay(new Date("02/28/2021"));
      const shipment = await Shipment.find({
        createdAt: { $gte: date1, $lte: date2 },
      });
      let rate;
      shipment.forEach(async (ship) => {
        if (ship.dollarRate) {
          rate = ship.dollarRate;
        } else {
          rate = 470;
        }
        const weight = ship.weight;
        const halfWeight = weight / 2;
        const dollar = halfWeight * rate;
        const naira = weight * 50;
        const total = Math.round(dollar + naira);
        const update = await User.findByIdAndUpdate(ship.user, {
          $inc: {
            totalKg: weight,
            wallet: total,
            balance: total,
          },
        });
        await Shipment.findByIdAndUpdate(ship._id, {
          calculated: true,
          rebate: total,
        });
        console.log(
          `second ${update.fullname} wallet & balance with ${total}, Total: N${update.wallet}, N:${update.balance}`
        );
      });
    };
    const calculateThird = async () => {
      const date1 = startOfDay(new Date("03/01/2021"));
      const date2 = endOfDay(new Date("12/30/2021"));
      const shipment = await Shipment.find({
        createdAt: {
          $gte: date1,
          $lte: date2,
        },
      });
      let rate;
      shipment.forEach(async (ship, index) => {
        if (ship.dollarRate) {
          rate = ship.dollarRate;
        } else {
          rate = 470;
        }
        const weight = ship.weight;
        const halfWeight = weight / 2;
        const dollar = halfWeight * rate;
        const naira = weight * 100;
        const total = Math.round(dollar + naira);
        const update = await User.findByIdAndUpdate(ship.user, {
          $inc: {
            totalKg: weight,
            wallet: total,
            balance: total,
          },
        });
        await Shipment.findByIdAndUpdate(ship._id, {
          calculated: true,
          rebate: total,
        });
        console.log(
          `third ${index} Updated ${update.fullname} wallet & balance with ${total}, Total: N${update.wallet}, N:${update.balance}`
        );
      });
    };
    const calculateFourth = async () => {
      const date1 = startOfDay(new Date("01/03/2022"));
      const date2 = endOfDay(new Date("04/12/2022"));
      const shipment = await Shipment.find({
        createdAt: {
          $gte: date1,
          $lte: date2,
        },
      });
      let rate;
      shipment.forEach(async (ship, index) => {
        if (ship.dollarRate) {
          rate = ship.dollarRate;
        } else {
          rate = 470;
        }
        const weight = ship.weight;
        const halfWeight = weight * 0.7;
        const dollar = halfWeight * rate;
        const naira = weight * 100;
        const total = Math.round(dollar + naira);
        const update = await User.findByIdAndUpdate(ship.user, {
          $inc: {
            totalKg: weight,
            wallet: total,
            balance: total,
          },
        });
        await Shipment.findByIdAndUpdate(ship._id, {
          calculated: true,
          rebate: total,
        });
        console.log(
          `fourth ${index} Updated ${update.fullname} wallet & balance with ${total}, Total: N${update.wallet}, N:${update.balance}`
        );
      });
    };

    const calculateFifth = async () => {
      const date1 = startOfDay(new Date("04/12/2022"));
      const date2 = endOfDay(new Date("05/31/2022"));
      const shipment = await Shipment.find({
        createdAt: {
          $gte: date1,
          $lte: date2,
        },
      });
      let rate;
      shipment.forEach(async (ship, index) => {
        if (ship.dollarRate) {
          rate = ship.dollarRate;
        } else {
          rate = 470;
        }
        const weight = ship.weight;
        const halfWeight = weight * 0.6;
        const dollar = halfWeight * rate;
        const naira = weight * 100;
        const total = Math.round(dollar + naira);
        const update = await User.findByIdAndUpdate(ship.user, {
          $inc: {
            totalKg: weight,
            wallet: total,
            balance: total,
          },
        });

        await Shipment.findByIdAndUpdate(ship._id, {
          calculated: true,
          rebate: total,
        });
        console.log(
          `fifth ${index} Updated ${update.fullname} wallet & balance with ${total}, Total: N${update.wallet}, N:${update.balance}`
        );
      });
    };

    const deduct = async () => {
      const withdrawals = await Fund.find({});
      withdrawals.forEach(async (data) => {
        console.log(data);
        if (data.status === "Pending" || data.status === "Approved") {
          const update = await User.findByIdAndUpdate(data.user, {
            $inc: {
              balance: -data.amount,
            },
          });
          console.log(update);
        }
      });
    };
    const calculateAll = async () => {
      await calculateOne();
      await calculateSecond();
      await calculateThird();
      await calculateFourth();
      await calculateFifth();
      await deduct();
    };
    calculateAll();
    //   // const customers = await Shipment.distinct("mobile");
    //   // let timeout = 0;
    //   // let index = 1;
    //   // customers.forEach((mobile) => {
    //   //   setTimeout(() => {
    //   //     const body = `This is a quick reminder to notify you that we would be sending goods on friday 20th, May,2022 from Turkey to Nigeria!
    //   // Please make plans with your buying agents to finalize packing of your goods tonight
    //   // We wish you speedy sales!.
    //   // Forte Bridge Logistics`;
    //   //     const values = {
    //   //       body: body,
    //   //       phone: mobile,
    //   //     };
    //   //     axios
    //   //       .post(
    //   //         "https://api.chat-api.com/instance225964/sendMessage?token=u10endg0wkm7iu17",
    //   //         values
    //   //       )
    //   //       .then((response) => {
    //   //         console.log(index + 1, response.data.message);
    //   //       })
    //   //       .catch((error) => {
    //   //         console.log(error);
    //   //       });
    //   //   }, timeout);
    //   //   timeout += 3000;
    //   //   index = index + 1;
    //   // });
  } catch (error) {
    console.log(error);
  }

  // const all = await Shipment.find({}).sort({ createdAt: -1 }).limit(304);

  // const ship = await Shipment.find({ mobile: 2348105537061 });

  // console.log(ship.length);

  res.status(400).json({
    status: "success",
    msg: "done",
  });
};

export default handler;

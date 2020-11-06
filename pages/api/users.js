import connectDB from "../../utils/connectDB";
import Signature from "../../models/Signature";

export default async function Users(req, res) {
  const db = await connectDB();

  const { method } = req;

  try {
    switch (method) {
      //   @ 'GET'
      case "GET":
        const merchants = await Signature.find({}).sort({ _id: "desc" });

        if (!merchants) {
          res.json({
            status: "fail",
            data: null,
          });
        }

        res.json({
          status: "success",
          data: merchants,
        });
        break;

      //   @ 'POST'
      case "POST":
        const { db_name } = req.body;
        const admin = db.admin();
        const data = await admin.listDatabases();

        res.json({
          status: "success",
          data,
        });
        break;

      default:
        res.json({
          status: "error",
          message: "Request method not defined.",
        });
        break;
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
}

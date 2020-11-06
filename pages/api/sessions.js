import withSession from "../../utils/withSession";

const VALID_EMAIL = "demojevu@gmail.com";
const VALID_PASSWORD = "fromsouth";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      req.session.set("user", { email });
      await req.session.save();
      return res.status(201).send("");
    }

    return res.status(403).send("");
  }

  if (req.method === "DELETE") {
    req.session.destroy();
    return res.status(201).send("");
  }

  return res.status(404).send("");
};

export default withSession(handler);

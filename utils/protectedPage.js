const { withIronSession } = require("next-iron-session");

const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if (!user) {
      res.writeHead(302, { Location: "/login" });
      res.end();
      return { props: {} };
    }

    return {
      props: { user },
    };
  },
  {
    cookieName: "x_at",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: process.env.SESSION_SECRET,
  }
);

module.exports = getServerSideProps;

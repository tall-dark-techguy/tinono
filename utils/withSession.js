// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from "next-iron-session";

export default function withSession(handler) {
  return withIronSession(handler, {
    cookieName: "x_at",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: process.env.SESSION_SECRET,
  });
}

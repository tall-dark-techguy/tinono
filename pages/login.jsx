import Link from "next/link";
import { useState } from "react";
import Layout from "../layouts";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }

    try {
      const response = await axios.post("/api/sessions", { email, password });
      if (response.status !== 201) {
        setError("Invalid login details.");
        return;
      }
      router.replace("/user");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Layout>
        <div className="jumbotron bg-light">
          <article className="text-center pb-5">
            <h1 className="display-4">Login</h1>
            <p className="lead">Hey Chief, we missed you!</p>
          </article>

          <form onSubmit={handleLogin} className="signup-form labeled mx-auto">
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="pw"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-success btn-block">Login</button>

            <p className="my-5">
              <Link href="/signup">
                <a className="btn btn-outline-dark m-1">
                  Don't have an account?
                </a>
              </Link>

              <Link href="/">
                <a className="btn btn-outline-dark m-1">Forgot password?</a>
              </Link>
            </p>
          </form>
        </div>
      </Layout>
    </>
  );
}

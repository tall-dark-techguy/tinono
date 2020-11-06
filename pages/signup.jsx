import Link from "next/link";
import Layout from "../layouts";

export default function SignUp() {
  return (
    <>
      <Layout>
        <div className="jumbotron bg-light">
          <div className="container">
            <article className="text-center">
              <h1 className="display-4">Sign up</h1>
              <p className="lead">Create account to test the authentication.</p>
              <hr className="my-4" />
            </article>

            <form className="labeled mx-auto signup-form">
              <div className="form-group">
                <label htmlFor="fn">First name</label>
                <input type="text" className="form-control" id="fn" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="form-group">
                <label htmlFor="pw">Password</label>
                <input type="password" className="form-control" id="pw" />
              </div>

              <div className="form-group">
                <label htmlFor="cpw">Confirm password</label>
                <input type="password" className="form-control" id="cpw" />
              </div>

              <button className="btn btn-success btn-block">
                Create account
              </button>

              <p className="my-5">
                <Link href="/login">
                  <a className="btn btn-outline-dark">Already registered?</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

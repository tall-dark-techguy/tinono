import Link from 'next/link';
import Layout from "../layouts";

export default function Login() {
    return <>
        <Layout>
            <div className="jumbotron bg-light">
                <article className="text-center">
                    <h1 className="display-4">Login</h1>
                    <p className="lead">Login to your account to see how authentication works, Chief!</p>
                    <hr className="my-4" />
                </article>
                    
                    <form className="signup-form labeled mx-auto">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pw">Password</label>
                            <input type="password" className="form-control" id="pw" />
                        </div>

                        <button className="btn btn-primary btn-block">Login</button>

                        <p className="my-5">
                            <Link href="/signup">
                                <a className="btn btn-outline-dark m-1">Don't have an account?</a>
                            </Link>

                            <Link href="/">
                                <a className="btn btn-outline-dark m-1">Forgot password?</a>
                            </Link>
                        </p>
                    </form>
            </div>
        </Layout>
    </>
}
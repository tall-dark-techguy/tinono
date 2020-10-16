import Layout from "../layouts";

export default function Index() {
    return <>
        <Layout>
            <div className="jumbotron text-center">
                <h1><strong>Hey!</strong> This is Tinono.</h1>
                <p className="lead">Next.js starter app, with bootstrap and JWT authentication.</p>

                <p><a href="" className="btn btn-outline-dark btn-lg">View on Github</a></p>
            </div>
        </Layout>
    </>
}
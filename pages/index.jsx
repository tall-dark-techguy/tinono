import Link from "next/link";
import { useState } from "react";
import NavBar from "../components/nav";
import Layout from "../layouts";
import { useRouter } from "next/router";
import { set } from "mongoose";
import AdminLayout from "../layouts/adminLayout";

export default function Index() {
  return (
    <>
      <AdminLayout>
        <main className="main">
          <div className="card bg-dark text-light">
            <img
              src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-26-aom-37913-olj1346-1-design_2.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6145464430c927e8d3ee6570c02a2d89"
              alt=""
              className="card-img-top"
            />

            <div className="card-img-overlay text-center">
              <p className="lead">The future of</p>
              <h1 className="display-4">creat-ive</h1>
              <p>
                <Link href="/signup">
                  <a className="btn btn-dark">Get started</a>
                </Link>
              </p>
            </div>

            <div className="card-header">Card header</div>

            <div className="card-body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              repellat eaque a saepe quasi deleniti rerum quidem, nam, earum
              eligendi accusantium voluptate magni nulla cumque voluptatum enim
              incidunt? Recusandae, quod!
            </div>

            <ul className="list-group list-group-flush text-dark">
              <li className="list-group-item">Luxury</li>

              <li className="list-group-item">Expensive</li>

              <li className="list-group-item">World class</li>
            </ul>

            <div className="card-footer">card footer</div>
          </div>

          <section className="container">
            <div className="jumbotron bg-white">
              <div className="row">
                <div className="col-sm-6 border-right border-dark shadow-sm  text-monospace">
                  Only those who are crazy enough to think they can change the
                  world, that actually do.
                  <br />
                  <br />
                  <mark>Steve Jobs</mark>
                </div>

                <div className="col-sm-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus aperiam necessitatibus similique repellendus
                  voluptatem sapiente beatae recusandae, doloribus, atque vero
                  reprehenderit illo temporibus libero magni maiores corporis
                  reiciendis quam fugit.
                </div>
              </div>
            </div>

            <div className="border">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Pluvastore</li>
                <li className="list-group-item">PluvaTouch</li>
                <li className="list-group-item">Gopluva</li>
              </ul>
            </div>

            <form className="my-5">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Pluvastore..."
                />

                <div className="input-group-append">
                  <button className="btn btn-warning">Search</button>
                </div>
              </div>
            </form>

            <div className="jumbotron">
              <p className="lead">Access more features! Login to account.</p>
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />

                  <div className="input-group-append">
                    <span className="input-group-text">(?)</span>
                  </div>
                </div>

                <button className="btn btn-success">Login</button>
              </form>

              <a href="" className="btn btn-link">
                Forgot password?
              </a>
            </div>

            <hr className="my-5" />
            <h4>Button group</h4>

            <div className="btn-toolbar" role="toolbar">
              <div className="btn-group">
                <button className="btn btn-outline-dark">Login</button>
                <button className="btn btn-success">Sign up</button>
              </div>
            </div>

            <hr className="my-5" />
            <h4>Buttons</h4>

            <p>
              <button className="btn btn-warning btn-block" disabled>
                Checkout
              </button>
            </p>

            <p>
              <button className="btn btn-link">Continue shopping</button>
            </p>

            <p>
              <button className="btn btn-outline-warning">
                Add to wish list
              </button>
            </p>

            <hr className="my-5" />
            <h4>Breadcrumb</h4>

            <ul className="breadcrumb bg-white white">
              <li className="breadcrumb-item">
                <a href="">Home</a>
              </li>

              <li className="breadcrumb-item">
                <a href="">Collections</a>
              </li>

              <li className="breadcrumb-item">Male</li>
            </ul>

            <hr className="my-5" />
            <h4>
              Badges <span className="badge badge-pill badge-dark">3</span>
            </h4>

            <a href="" className="btn btn-outline-dark mr-2">
              Orders <span className="badge badge-pill badge-dark">15</span>
            </a>

            <a href="" className="btn btn-outline-dark mr-2">
              Customers <span className="badge badge-pill badge-dark">102</span>
            </a>

            <a href="" className="btn btn-outline-dark">
              Returned products{" "}
              <span className="badge badge-pill badge-dark">1</span>
            </a>

            <hr className="my-5" />
            <h4>Alerts</h4>

            <div className="alert alert-primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              autem?{" "}
              <a href="" className="alert-link">
                <u>Learn more</u>
              </a>
            </div>

            <div className="alert alert-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              pariatur!
            </div>

            <div className="alert alert-success">
              Welcome to Pluvastore, Jay!{" "}
              <a href="" className="alert-link">
                <u>Here's how to start selling</u>
              </a>
            </div>

            <div className="alert alert-danger">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, unde!
            </div>

            <div className="alert alert-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, maxime.
            </div>

            <div className="alert alert-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              blanditiis!
            </div>

            <div className="alert alert-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, odio?
            </div>

            <hr className="my-5" />

            <div className="row">
              <div className="col-6 col-md-3">
                <figure className="figure">
                  <img
                    src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-26-aom-37913-olj1346-1-design_2.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6145464430c927e8d3ee6570c02a2d89"
                    alt=""
                    className="figure-img img-fluid"
                  />
                  <figcaption className="figure-caption">
                    <p className="lead">
                      Crowdfunding <br />
                      <strong>$ 100 / hr</strong>
                      <br />
                      <a
                        href=""
                        className="btn btn-outline-dark btn-block mt-3"
                      >
                        Get started
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-6 col-md-3">
                <figure className="figure">
                  <img
                    src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-26-aom-37913-olj1346-1-design_2.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6145464430c927e8d3ee6570c02a2d89"
                    alt=""
                    className="figure-img img-fluid"
                  />
                  <figcaption className="figure-caption">
                    <p className="lead">
                      Design services <br />
                      <strong>$ 49 / hr</strong>
                      <br />
                      <a
                        href=""
                        className="btn btn-outline-dark btn-block mt-3"
                      >
                        Get started
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-6 col-md-3">
                <figure className="figure">
                  <img
                    src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-26-aom-37913-olj1346-1-design_2.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6145464430c927e8d3ee6570c02a2d89"
                    alt=""
                    className="figure-img img-fluid"
                  />
                  <figcaption className="figure-caption">
                    <p className="lead">
                      Design services <br />
                      <strong>$ 49 / hr</strong>
                      <br />
                      <a
                        href=""
                        className="btn btn-outline-dark btn-block mt-3"
                      >
                        Get started
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>

            <hr className="my-5" />

            <h4>Team members</h4>

            <div className="table-responsive">
              <table className="table table-light table-striped table-bordered table-hover">
                <thead className="">
                  <tr>
                    <th>S/N</th>
                    <th>Nick name</th>
                    <th>Role</th>
                    <th>Organization</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="table-danger">
                    <td>01</td>
                    <td>Desse</td>
                    <td>Lead Developer</td>
                    <td>Gopluva</td>
                    <td>
                      <a
                        href=""
                        className="btn btn-outline-dark btn-sm btn-block"
                      >
                        View
                      </a>
                    </td>
                  </tr>

                  <tr className="table-success">
                    <td>02</td>
                    <td>Wiz</td>
                    <td>CEO</td>
                    <td>Gopluva</td>
                    <td>
                      <a
                        href=""
                        className="btn btn-outline-dark btn-sm btn-block"
                      >
                        View
                      </a>
                    </td>
                  </tr>

                  <tr className="table-success">
                    <td>03</td>
                    <td>Jay</td>
                    <td>Design Lead</td>
                    <td>Pluvastore</td>
                    <td>
                      <a
                        href=""
                        className="btn btn-outline-dark btn-sm btn-block"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Products */}

          <section className="container">
            {/* <h4 className="mb-4">Images</h4> */}
            <div className="row my-5">
              <div className="col-md-6">
                <p className="lead">We are a</p>
                <h1 className="display-4">global team</h1>
                <p className="lead">of inspired people</p>
                <hr className="my-5" />

                <p>
                  <a href="" className="btn btn-outline-dark btn-lg">
                    Join our team
                  </a>
                </p>
              </div>

              <div className="col-md-6">
                <img
                  src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-18-wr-smalllegs-c-standingg04.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=80f9a5ba75ee16ebef1bb9d569aca4b5"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>

            <p>
              <img
                src="https://www.tutorialspoint.com/bootstrap/images/64.jpg"
                alt=""
                className="rounded-circle mx-auto d-block img-fluid"
              />
            </p>

            <p className="lead">
              Hello Adamma, welcome
              <img
                src="https://www.tutorialspoint.com/bootstrap/images/64.jpg"
                alt=""
                className="rounded-circle float-right"
              />
            </p>

            <br />
            <br />

            <img
              src="https://www.tutorialspoint.com/bootstrap/images/64.jpg"
              alt=""
              className="img-thumbnail"
            />

            <img
              src="https://www.tutorialspoint.com/bootstrap/images/64.jpg"
              alt=""
              className="rounded-circle float-right"
            />

            <img
              src="https://www.tutorialspoint.com/bootstrap/images/64.jpg"
              alt=""
              className="rounded"
            />

            <hr className="my-5" />
            <h4>Code</h4>

            {/* <code>
          <html>
            <head>
              <title>Welcome to Pluvastore</title>
            </head>

            <body>
              <p>Hello, Merchant!</p>
            </body>
          </html>
        </code> */}

            <hr className="my-5" />
            <h4>List inline</h4>
            <ul className="list-inline">
              <li className="list-inline-item">Products</li>
              <li className="list-inline-item">Brands</li>
              <li className="list-inline-item">Categories</li>
              <li className="list-inline-item">Collections</li>
            </ul>

            <hr className="my-5" />
            <h4>List unstyled</h4>
            <ul className="list-unstyled">
              <li>Products</li>
              <li>Brands</li>
              <li>Categories</li>
              <li>Collections</li>
            </ul>

            <hr className="my-5" />

            <h4 className="mb-4">Description list</h4>
            <dl className="row">
              <dt className="col-3">Products</dt>
              <dd className="col-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, fugiat. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Aspernatur, excepturi?
              </dd>

              <dt className="col-3">Collections</dt>
              <dd className="col-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                aspernatur. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Pariatur, rem!
              </dd>
            </dl>

            <hr className="my-5" />

            <abbr title="Sell online with Pluvastore">Pluvastore</abbr>

            <blockquote className="blockquote">
              <mark>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto, voluptatem. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Laboriosam cupiditate corrupti omnis. Soluta
                quod dolorum unde fugit praesentium magnam saepe corporis.
                Soluta optio atque aliquam aperiam non illum minus eos.
              </mark>
            </blockquote>

            <p>
              Welcome to <mark>Pluvastore</mark>
            </p>

            <hr className="my-5" />
            <h1 className="display-1">
              Lorem <mark>ipsum dolor</mark> sit amet.
            </h1>
            <h1 className="display-2">Lorem ipsum dolor sit amet.</h1>
            <h1 className="display-3">Lorem ipsum dolor sit amet.</h1>
            <h1 className="display-4">Lorem ipsum dolor sit amet.</h1>

            <hr className="my-5" />

            <h1 className="display-4">Our new classic design</h1>
            <p className="lead">
              We've redesigned our platform to a new modern look we know you'll
              love!
            </p>
            <p>
              <a href="" className="btn btn-outline-dark btn-lg">
                View demo
              </a>
            </p>

            <hr className="my-5" />

            <h1>Lorem ipsum dolor sit amet.</h1>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <h6>Lorem ipsum dolor sit amet.</h6>

            <h4 className="py-4">Hot deals!</h4>

            <div className="row no-gutters">
              <div className="col-6 col-md-3 p-1">
                <p className="bg-light text-light text-center">
                  <a href="" className="btn btn-outline-danger btn-sm">
                    - 20 %
                  </a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  ex asperiores est nulla rem magnam saepe inventore optio
                  maxime rerum, aliquam ipsa deleniti ipsum incidunt sint hic ut
                  nam laboriosam?
                </p>

                <p>
                  <a href="" className="btn btn-outline-dark">
                    Add to cart
                  </a>
                </p>
              </div>

              <div className="col-6 col-md-3 p-1">
                <p className="bg-light text-light text-center">
                  <a href="" className="btn btn-outline-danger btn-sm">
                    - 77 %
                  </a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  ex asperiores est nulla rem magnam saepe inventore optio
                  maxime rerum, aliquam ipsa deleniti ipsum incidunt sint hic ut
                  nam laboriosam?
                </p>

                <p>
                  <a href="" className="btn btn-outline-dark">
                    Add to cart
                  </a>
                </p>
              </div>

              <div className="col-6 col-md-3 p-1">
                <p className="bg-light text-light text-center">
                  <a href="" className="btn btn-outline-danger btn-sm">
                    - 12 %
                  </a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  ex asperiores est nulla rem magnam saepe inventore optio
                  maxime rerum, aliquam ipsa deleniti ipsum incidunt sint hic ut
                  nam laboriosam?
                </p>

                <p>
                  <a href="" className="btn btn-outline-dark">
                    Add to cart
                  </a>
                </p>
              </div>

              <div className="col-6 col-md-3 p-1">
                <p className="bg-light text-light text-center">
                  <a href="" className="btn btn-outline-danger btn-sm">
                    - 12 %
                  </a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  ex asperiores est nulla rem magnam saepe inventore optio
                  maxime rerum, aliquam ipsa deleniti ipsum incidunt sint hic ut
                  nam laboriosam?
                </p>

                <p>
                  <a href="" className="btn btn-outline-dark">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </section>
          {/* End of products */}
        </main>
      </AdminLayout>{" "}
    </>
  );
}

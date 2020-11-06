const { default: AdminLayout } = require("../layouts/adminLayout");
import Axios from "axios";
import { useRouter } from "next/router";
import pageSessionHandler from "../utils/pageSessionHandler";
import withSession from "../utils/withSession";
import Slider from "react-slick";

function User(props) {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await Axios.delete("/api/sessions");
    if (response.status === 201) {
      router.replace("/login");
    }
  };

  const settings = {
    dots: true,
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <>
      <AdminLayout>
        <div className="jumbotron bg-white m-0">
          <Slider {...settings}>
            <div className="jumbotron bg-dark m-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              aspernatur eum quae nisi, dignissimos ab mollitia nostrum commodi
              nulla atque culpa consequatur quibusdam temporibus vitae fugit,
              eveniet, non tenetur odio!
            </div>

            <div className="jumbotron bg-warning m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum
              doloribus molestias maiores magni ut alias sed corporis! Repellat
              quidem quibusdam delectus, odio distinctio sit. Praesentium
              perferendis perspiciatis vero necessitatibus?
            </div>

            <div className="jumbotron bg-danger m-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis assumenda, nihil hic deleniti delectus tempore neque
              at similique quasi rerum beatae, odio pariatur fugiat, minima sint
              ipsum debitis nostrum natus.
            </div>
          </Slider>
        </div>
        <div className="jumbotron text-center m-0">
          <p className="lead">Hello, {props.user.email}!</p>
          <p className="lead">You're logged in.</p>
          <p>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          </p>
        </div>
      </AdminLayout>
    </>
  );
}

export const getServerSideProps = withSession(async ({ req, res }) => {
  return pageSessionHandler(req, res);
});

export default User;

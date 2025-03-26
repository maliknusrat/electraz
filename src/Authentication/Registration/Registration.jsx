import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import animation from "../../assets/registerAnimation.json";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      Swal.fire({
        title: "Password must be six characters",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }

    if (
      !/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z])/.test(password)
    ) {
      Swal.fire({
        title: "Password must an upper latter and one special character",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }

    //create User

    // eslint-disable-next-line no-undef
    createUser(email, password)
      .then((result) => {
        updateUserData(result.user, name, photo);
        console.log(result.user, name);
        setLoading(false);
        Swal.fire({
          title: "Registration Successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("User Profile Updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center h-[100vh] gap-10 bg-white">
      <div className="hero-content">
        <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body ">
            <div className="text-center lg:text-left border-b-2">
              <h1 className="text-3xl text-center p-4 font-semibold">
                Register Here!
              </h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input rounded-sm input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input rounded-sm input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo url"
                className="input rounded-sm input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input rounded-sm input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-neutral rounded-none"
                type="submit"
                value={`${loading ? 'creating..':'Register'}`}
              />
            </div>
            <p className="py-2 text-center text-sm">
              Already Have an Account?{" "}
              <Link className="font-semibold text-sky-600" to="/login">
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden md:flex">
        <Lottie
          className="h-[620px] w-full md:w-10/12 "
          animationData={animation}
          loop={true}
        ></Lottie>
      </div>
    </div>
  );
};

export default Registration;

import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const [error, setError] = useState(null);
    const { login, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((userCredential) => {
            const user = userCredential.user;
            setError(null);
            navigate(location?.state ? location?.state : "/")
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleGoogleLogin = () => {
        googleLogin().then((result) => {
            setError(null);
            navigate(location?.state ? location?.state : "/")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);

        });
    }
    return (
        <>
            <Helmet>
                <title>Gadget Hunter - Sign In</title>
            </Helmet>
            <div className="max-w-7xl mx-auto mt-8">
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse  w-full bg-base-200 rounded-xl ">
                        <div className="flex justify-center  ">
                            <img src="https://i.ibb.co/87vTrXZ/1-UFBZi-E5-Fia-Djciz24d-P5iw.png" className="rounded-lg" alt="Gadget Image" />
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-center my-4 text-[#58CCF5]">Login</h1>
                                <form className="card-body mt-0 pt-0" onSubmit={handleFormSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="******" className="input input-bordered" required />
                                    </div>
                                    <p className="text-red-600 text-sm">{error && "Use correct email and password"}</p>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#58CCF5] text-white">Login</button>
                                    </div>
                                </form>
                            </div>
                            <div className="divider mt-0 mb-8 mx-8">OR</div>
                            <div className="mx-8 text-center">
                                <button className="btn bg-[#58CCF5] text-white w-full flex items-center" onClick={handleGoogleLogin}><FaGoogle></FaGoogle> Login with Google</button>
                                <Link className="text-sm mt-4 text-[#58CCF5]" to={"/registration"}>If you don't have any account then registers first!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
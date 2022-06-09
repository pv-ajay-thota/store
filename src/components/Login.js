import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"
              onClick={() => {
                navigate("/store");
              }}
            >
              Login
            </button>

            {/* <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div> */}
          </div>

          <div className="text-grey-dark mt-6">
            Do not have an account?
            <span
              className="no-underline border-b border-blue text-blue hover:cursor-pointer"
              onClick={() => {
                navigate("/register");
              }}
            >
              {" "}
              click here register
            </span>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

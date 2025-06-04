import Logo from "../components/Logo";
import Form from "../components/Form";
import Bluetext from "../components/Bluetext";
import GoogleCard from "../components/GoogleCard";

const Login = () => {
  return (
    <div className="mx-5 mt-11">
      <Logo
        header={"login"}
        para={"Log in to trippin' to start using the app"}
      />

      <Form login title={"log in"} />
      <div className="mt-5">
        <Bluetext link={"/login"} text={"Forgot Password?"} />
      </div>
      <div className="mt-[14rem]">
        <Bluetext link={"/signup"} text={"Dont't have an account? Sign up"} />
      </div>
      <GoogleCard />
    </div>
  );
};

export default Login;

import Logo from "../components/Logo";
import Form from "../components/Form";
import Bluetext from "../components/Bluetext";
import GoogleCard from "../components/GoogleCard";

const SignUp = () => {
  return (
    <div className="mx-5 mt-11">
      <Logo
        header={"sign up"}
        para={"Sign up to trippin to start using the app"}
      />

      <Form title={"sign up"} />
      <div className="mt-5">
        <Bluetext link={"/login"} text={"Already have an account? Log in"} />
      </div>
      <div className="mt-[10rem]">
        <GoogleCard />
      </div>
    </div>
  );
};

export default SignUp;

import Inputs from "./Inputs";
import { useNavigate } from "react-router-dom";
import Reuseablebtn from "./Reuseablebtn";

const Form = ({ login, title }) => {
  const navigate = useNavigate();
  if (login) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { email, password } = e.target;

          if (!email.value) return alert("please enter your email");
          if (!password.value) return alert("please enter your password");
          if (password.value.length < 8)
            return alert("password must be up to 8 characters");

          alert(`Signed up using: ${email.value}`);
          navigate("/home");
        }}
      >
        <Inputs
          type="email"
          id="email"
          label="Email"
          placeholder="example@email.com"
        />
        <Inputs
          type="password"
          id="password"
          label="Password"
          placeholder="Enter Password"
        />

        <div className="mt-14">
          <Reuseablebtn type={"submit"} title={title} />
        </div>
      </form>
    );
  } else
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { email, password } = e.target;

          if (!email.value) return alert("please enter your email");
          if (!password.value) return alert("please enter your password");
          if (password.value.length < 8)
            return alert("password must be up to 8 characters");
          if (password.value !== confirmPassword.value)
            return alert("Passwords do not match");
          alert("Logged In");

          navigate("/login");
        }}
      >
        <Inputs
          type="email"
          id="email"
          label="Email"
          placeholder="example@email.com"
        />
        <Inputs
          type="password"
          id="password"
          label="Password"
          placeholder="Enter Password"
        />
        <Inputs
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          placeholder="Enter Password"
        />
        <div className="mt-14">
          <Reuseablebtn type={"submit"} title={title} />
        </div>
      </form>
    );
};

export default Form;

import "./index.scss";
import { useEffect } from "react";

const LoginForm = () => {
  useEffect(() => {
    /* JavaScript with the precious help of Jean Pierre Vincent @theystolemynick https://twitter.com/theystolemynick  */
    function validateThisField(field: any) {
      if (field.required && field.value === "") {
        field.classList.add("required");
        formIsValid = false;
      }
      if (
        field.pattern &&
        !(new RegExp(field.pattern).exec(field.value) !== null)
      ) {
        field.classList.add("invalid");
        formIsValid = false;
      }
    }
    var form = document.getElementById("loginform");
    // @ts-ignore
    var fields = form.querySelectorAll("input");
    var formIsValid = true;
    // @ts-ignore
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      Array.prototype.forEach.call(fields, validateThisField);
      // also have a global state on the form
      if (!formIsValid) {
        // @ts-ignore
        form.classList.remove("errors");
        setTimeout(function () {
          // @ts-ignore
          form.classList.add("errors");
        }, 0);
      }
    });

    // @ts-ignore
    form.addEventListener(
      "blur",
      function (e) {
        // @ts-ignore
        e.target.classList.remove("required");
        // @ts-ignore
        e.target.classList.remove("invalid");
        validateThisField(e.target);
      },
      true
    );
  }, []);
  return (
    <div className="form" id="loginform">
      <h1> Login </h1>
      <form noValidate>
        <p className="email">
          <label htmlFor="email">
            Email login <span>*</span>
          </label>
          <input
            className="input"
            required
            type="email"
            id="email"
            name="email"
            pattern="@"
          />
          <span className="validation error"> Please enter a valid email</span>
          <span className="validation req"> This field is required</span>
        </p>
        <p className="password">
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <input
            className="input"
            required
            type="password"
            id="password"
            name="password"
          />
          <span className="validation req"> This field is required</span>
        </p>
        <p className="remember">
          <input className="checkbox" type="checkbox" id="remember" />
          <label htmlFor="remember"> Remember me</label>
        </p>
        <p className="login">
          <input type="submit" value="Login" />
        </p>
      </form>
    </div>
  );
};
export default LoginForm;

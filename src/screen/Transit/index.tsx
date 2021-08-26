import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getSessionStorage } from "../../util";

const Transit = () => {
  const history = useHistory();
  const locationUrl = history.location.pathname;
  console.log(locationUrl);
  const token = getSessionStorage("token");
  useEffect(() => {
    if (token) {
    } else {
      if (locationUrl === "/register") {
        history.push("/register");
      } else {
        history.push("/login");
      }
    }
  }, []);
  return <div>transit</div>;
};
export default Transit;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //   Link,
  //   useRouteMatch,
  //   useParams,
} from "react-router-dom";

import Login from "./Login";
import LandingPage from "./LandingPage";
import OrderSummary from "./OrderSummary";
import Register from "./Register";
import { useEffect } from "react";

const AllRoutes = () => {
  const isLoggedin = false;
  // const [isLoggedin,SetIsLoggedIn] = useState(false);
  const loginCheck = () => {};
  useEffect(loginCheck, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={isLoggedin ? <LandingPage /> : <Login />}
        />
        <Route path="/store" exact element={<LandingPage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/Register" exact element={<Register />} />
        <Route path="/orderSummary" exact element={<OrderSummary />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;

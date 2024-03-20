import { Route, Routes as Router } from "react-router-dom";
import {
  About,
  AddNumbers,
  FaildImage,
  Home,
  Login,
  NotFound,
  Numbers,
  Oldnumbers,
  ResultInfos,
  Signup,
  SuccessImage,
} from "../modules/index.jsx";
const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/addnumbers" element={<AddNumbers />} />
      <Route path="/numbers" element={<Numbers />} />
      <Route path="/create-an-account" element={<Signup />} />
      <Route path="/login-your-account" element={<Login />} />
      <Route path="/oldnumbers" element={<Oldnumbers />} />
      {/* all notifications route . */}
      <Route
        path="/success-to-create-an-account"
        element={
          <ResultInfos
            name={"Success! to create your account!"}
            description={
              "our server successfully added your informations,thanks to use our application, stay happy with us."
            }
            Image={SuccessImage}
          />
        }
      />
      <Route
        path="/success-to-login-your-account"
        element={
          <ResultInfos
            name={"Success! to login your account!"}
            description={
              "our database successfully done to login with currect informations,  thanks to use our application, stay happy with us. "
            }
            Image={SuccessImage}
          />
        }
      />
      <Route
        path="/faild-to-create-an-account"
        element={
          <ResultInfos
            name={"Sorry! to create an  account!"}
            description={
              "our database faild to done  the proccess, try again ,or put onother email address.... "
            }
            Image={FaildImage}
          />
        }
      />
      <Route
        path="/faild-to-login-your-account"
        element={
          <ResultInfos
            name={"Sorry! to login your  account!"}
            description={
              "our database faild to done  the proccess, Your puting informations are invalid please try to login with the valid informations."
            }
            Image={FaildImage}
          />
        }
      />
      {/* 404page route  */}
      <Route path="*" element={<NotFound />} />
    </Router>
  );
};

export default Routes;

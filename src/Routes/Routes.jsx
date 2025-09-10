import { Route, Routes as Router } from "react-router-dom";
import Contact from "../pages/contact.jsx";
import AaccountSettings from "../pages/dashboard/account-settings.jsx";
import AddNewContact from "../pages/dashboard/addnew-contact.jsx";
import AllContacts from "../pages/dashboard/all-contacts.jsx";
import Dashboard from "../pages/dashboard/dashboard.jsx";
import FavouriteContact from "../pages/dashboard/favourite-contact.jsx";
import {
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
  SuccessToSave,
  FaildImage2,
  FaildLogin,
  WrongCredential,
} from "../utils/index.jsx";
const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/addnumbers" element={<AddNumbers />} />
      <Route path="/saved-numbers" element={<Numbers />} />
      <Route path="/create-an-account" element={<Signup />} />
      <Route path="/login-your-account" element={<Login />} />
      <Route path="/oldnumbers" element={<Oldnumbers />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/allcontacts" element={<AllContacts />} />
      <Route path="/dashboard/addnew-contact" element={<AddNewContact />} />
      <Route
        path="/dashboard/favourite_contact"
        element={<FavouriteContact />}
      />
      <Route
        path="/dashboard/account-settings"
        element={<AaccountSettings />}
      />

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
        path="/already-have-an-account"
        element={
          <ResultInfos
            name={"Sorry! this account already exist ! please login "}
            description={
              "please login with your crediantials , your account is already exist in our server!"
            }
            Image={FaildImage2}
          />
        }
      />
      <Route
        path="/account-not-found"
        element={
          <ResultInfos
            name={"Sorry! your account is not  exist ! please Signup "}
            description={
              "please login with your crediantials , your account is already exist in our server!"
            }
            Image={FaildLogin}
          />
        }
      />
      <Route
        path="/wrong-credentials"
        element={
          <ResultInfos
            name={"Sorry! your input credentials are wrong"}
            description={
              "please login with your crediantials , your account is already exist in our server!"
            }
            Image={WrongCredential}
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
        path="/successful-to-save-number"
        element={
          <ResultInfos
            name={"Success! to save an number"}
            description={" Successful to store phone number.."}
            Image={SuccessToSave}
            customBtn
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

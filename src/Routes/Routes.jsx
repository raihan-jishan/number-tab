import { Route, Routes as Router } from "react-router-dom";
import Contact from "../pages/contact.jsx";
import AaccountSettings from "../pages/dashboard/account-settings.jsx";
import AddNewContact from "../pages/dashboard/addnew-contact.jsx";
import AllContacts from "../pages/dashboard/all-contacts.jsx";
import Dashboard from "../pages/dashboard/dashboard.jsx";
import FavouriteContact from "../pages/dashboard/favourite-contact.jsx";
import {
  AddNumbers,
  Home,
  Login,
  NotFound,
  Numbers,
  Oldnumbers,
  ResultInfos,
  Signup,
} from "../utils/index.jsx";
import { NotificationRoutes } from "../constants/index.jsx";
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
      {NotificationRoutes.map((item, index) => {
        return (
          <Route
            path={item.path}
            element={
              <ResultInfos
                Image={item.MessageImage}
                buttonPath1={item.buttonPath1}
                buttonPath2={item.buttonPath2}
                buttonText1={item.buttonText1}
                buttonText2={item.buttonText2}
                firstIcon={item.firstIcon}
                secondIcon={item.secondIcon}
                name={item.MessageName}
              />
            }
          />
        );
      })}
      {/* 404page route  */}
      <Route path="*" element={<NotFound />} />
    </Router>
  );
};

export default Routes;

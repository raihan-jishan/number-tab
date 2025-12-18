import { Route, Routes as Router } from "react-router-dom";
import AaccountSettings from "../pages/dashboard/account-settings.jsx";
import AddNewContact from "../pages/dashboard/addnew-contact.jsx";
import Dashboard from "../pages/dashboard/dashboard.jsx";
import FavouriteContact from "../pages/dashboard/favourite-contact.jsx";
import {
  AddNumbers,
  Home,
  Login,
  NotFound,
  Oldnumbers,
  ResultInfos,
  CreateAccount,
} from "../utils/index.jsx";
import { NotificationRoutes } from "../constants/index.jsx";
import Signup from "../pages/signup/page.jsx";
import SavedContacts from "../pages/contacts/page.jsx";
const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/add-contact" element={<AddNumbers />} />
      <Route path="/saved-contacts" element={<SavedContacts />} />
      <Route path="/create-an-account" element={<CreateAccount />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/oldnumbers" element={<Oldnumbers />} />
      <Route path="/dashboard" element={<Dashboard />} />
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
            key={index}
            path={item.path}
            element={
              <ResultInfos
                Image={item.MessageImage}
                btnText={item.btnText}
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

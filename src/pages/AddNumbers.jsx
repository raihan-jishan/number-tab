import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AuthBtn } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { Label } from "../components/ui/label.jsx";
import { AppLayout, Context, Login, ThemeSwitcher } from "../utils/index.jsx";
import {
  ChartArea,
  Hash,
  House,
  MapPinned,
  NotebookPen,
  User,
} from "lucide-react";  

const AddNumbers = () => {
  const context = useContext(Context);
  const { addNote } = context;
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });

    // ✅ redirect after short delay (optional)
    setTimeout(() => {
      navigate("/successful-to-save-number");
    }, 1000);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex items-center justify-between p-2">
        <h1 className="text-3xl font-Raleway font-semibold">Add Number</h1>

        <ui className="flex items-center justify-between gap-2 p-2">
          <Link to={'/'}>
            <House size={26} />
          </Link>
          <Link to={'/dashboard'}>
            <ChartArea size={26} />
          </Link>
          <Link to={'/dashboard/account-settings'}>
            <User size={26} />
          </Link>
          <ThemeSwitcher />
        </ui>
      </div>
      {localStorage.getItem("token") ? (
        <AppLayout>
          {/* forms */}
          <div className="p-10 max-lg:p-0">
            <form>
              <div className="grid gap-6 mb-14 md:grid-cols-2 max-lg:mb-4">
                <div>
                  <Label
                    label={"Name"}
                    For={"name"}
                    icon={<NotebookPen size={22} />}
                  />
                  <Input
                    type="text"
                    name="title"
                    id="text"
                    value={note.title}
                    onChange={onChange}
                    placeholder="Enter name..."
                  />
                </div>
                <div>
                  <Label
                    label={"Phone number"}
                    For={"number"}
                    icon={<Hash size={22} />}
                  />
                  <Input
                    type="text"
                    name="description"
                    value={note.description}
                    onChange={onChange}
                    id="phone"
                    placeholder="+880-enter number"
                  />
                </div>
                <div>
                  <Label
                    label={"Location"}
                    For={"text"}
                    icon={<MapPinned size={22} />}
                  />
                  <Input
                    type="text"
                    name="tag"
                    value={note.tag}
                    onChange={onChange}
                    id="location"
                    placeholder="enter person location"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-center p-2 mt-20">
                <AuthBtn label={"Submit"} onClick={handleClick} />
              </div>
            </form>
          </div>
        </AppLayout>
      ) : (
        <Login />
      )}
    </>
  );
};

export default AddNumbers;

<<<<<<< HEAD
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext.js";
import noData from "../assets/noData.svg";
import "../css/numbers.css";
import NumberList from "../components/NumberList/NumberList";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Numbers = () => {
  // initialize context
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  //  useNaviagte hook
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  });
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="container-item">
        <div className="info-title">
          {/* if something found then action ...  */}
          {notes.length === 1 && <h2>Your all numbers ...</h2>}
        </div>
        {/* NumberList */}
        <div className="numberCard-container">
          {/* warning if something have not found! */}
          <div className="info-box">
            {notes.length === 0 && (
              <>
                <h1>No numbers to display</h1>

                <div className="image-div">
                  <img src={noData} alt="404 module not found!" />
                </div>
              </>
            )}
          </div>
          {/* close */}
         <div className="data-table">
            {notes.map((data) => {
              return <NumberList key={data._id} data={data} />;
            })}
          </div>
        </div>
        {/* close */}
      </div>
    </SkeletonTheme>
  );
};
=======
import React, { useContext, useEffect } from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import {
  AppLayout,
  Card,
  Context,
  Infos,
  Login,
  Typography,
} from "../modules/index.jsx";
const Numbers = () => {
  const context = useContext(Context);
  const { notes, getNotes, deleteNote } = context;
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      {localStorage.getItem("token") ? (
        <AppLayout>
          {notes.length === 0 ? (
            <Typography
              name={"no numbers to diplay"}
              icon={<MdOutlineLibraryBooks size={40} />}
            />
          ) : (
            <>
              <Typography
                name={"All numbers"}
                icon={<MdOutlineLibraryBooks size={40} />}
              />
            </>
          )}
          {/* card */}
          <div
            className="m-4   grid grid-cols-3 gap-10 mb-4 mt-5 max-lg:grid-cols-1
        max-sm:flex-col max-sm:gap-3 "
          >
            {notes.map((data) => {
              return (
                <Card
                  key={data.id}
                  name={data.title}
                  number={data.description}
                  type={data.tag ? data.tag : "not found!"}
                  deleteNote={deleteNote}
                  data={data}
                />
              );
            })}
          </div>
        </AppLayout>
      ) : (
        <>
          <Login />
          <Infos name={"for see saved numbers`"} />
        </>
      )}
    </>
  );
};

>>>>>>> 4214f29 (update the ui & increase features)
export default Numbers;

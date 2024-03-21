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
              fontSize={'max-lg:text-xl'}
              icon={<MdOutlineLibraryBooks size={30} />}
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
        max-sm:flex-col max-sm:gap-3  max-lg:m-0"
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
export default Numbers;
